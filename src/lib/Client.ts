import Request from './Request';
import { discordAPI, Message, opCodes, User, Guild } from './_DiscordAPI';
import undici from './_unicdi';
import Response from './Response';
import Emitter from './Emitter';
import { commandCallback, commandOptions } from './Command';
import Embed from './Embed';
import Colors from './Colors';

export type statusType = 'playing' | 'listening' | 'streaming' | 'competing';

enum statusCode {
    playing,
    streaming,
    listening,
    custom,
    competing
}
/**
 * status options for bot
 */
export interface statusOptions {
    /**
     * The status message to be displayed
     */
    name: string;

    /**
     * The available status types are playing, listening, streaming, and 
     * competing.
     */
    type?: statusCode;
    /**
     * The URL of a stream
     */

    url?: string;

    /**
     * The status of your bot. Online by default
     */
    status?: 'dnd' | 'offline' | 'idle' | 'online';
    /**
     * Whether or not the bot is afk.
     */
    afk?: boolean;
}



export interface Events {
    READY(): void | Promise<void>;
    MSG(req: Request): void | Promise<void>;
    CMD_NOT_FND(req: Request, cmd: commandCallback): void | Promise<void>;
    ERR(err: Error): void | Promise<void>;
}
export interface clientOptions {
    /**
     * The owners' discord ID
     */
    owners?: string[] | string;
    /**
     * To turn on the debug mode, not recommed to turn this on unless your debugging
     * the library.
     */
    debug?: boolean;
    /**
     * If this is turned on (true) When someone mentions your bot it will behave
     * as a prefix.
     */
    useMentionPrefix?: boolean;
    /**
     * 
     */
    builtinCommands?: {
        help?: boolean;
    }
}

type eventCallback =
    | (() => void | Promise<void>)
    | ((req: Request) => void | Promise<void>)
    | ((req: Request, cmd: commandCallback) => void | Promise<void>)
    | ((err: Error) => void | Promise<void>);

/**
 * The Client Class
 * @description The client class is the main starting point of your discord bot.
 * ```typescript
 * const fuwa = require('fuwa.js'); // Import Fuwa library
 * const client = new fuwa.Client('?'); // Create and initialize a Client
 * ```
 */
class Client extends Emitter {
    public bot: User;
    private sessionId = '';
    protected debugMode: boolean;
    public cache = {
        guilds: new Map<string, Guild>()
    };
    protected status: any = [];
    // protected events: Map<keyof Events, eventCallback> = new Map();
    /* eslint-disable */
    protected events: Map<keyof Events, Function> = new Map();
    protected prefix:
        string
        | string[]
        | ((req: Request) => Promise<string> | string);
    protected options: clientOptions;
    protected loop?: NodeJS.Timeout;
    protected commands: Map<
        string,
        { cb: commandCallback; options: commandOptions }[]
    > = new Map();
    protected middleware: commandCallback[] = [];
    /**
     * The Bot Token
     */
    token: string;
    /**
     * @param prefix The prefix for your bot
     */
    constructor(
        prefix:
            string
            | string[]
            | ((req: Request) => Promise<string> | string),
        options?: clientOptions
    ) {
        super();
        this.options = options;
        this.prefix = prefix;
        this.bot;
        // Bootleg auto-help command
        // TODO: Make it less bootleg 
        if (options.builtinCommands?.help ?? true) {
            this.command(['help', 'commands', 'h'], (req, res, next) => {
                let embed = new Embed().setColor(Colors.blue);
                if (req.args.length > 0) {
                    const cmdName = req.args[0];
                    const cmd = this.commands.get(cmdName.toLowerCase())
                    if (!cmd) {
                        res.send(embed.setColor(Colors.red)
                            .setTitle('Error')
                            .setDescription(`${cmdName} is not a valid command name.`)
                        );
                        return;
                    } else {
                        const fields = [
                            {
                                name: 'Example',
                                value: 'Soon'
                            }
                        ];
                        if (cmd[0].options.aliases) {
                            fields.push({
                                name: 'Aliases',
                                value: `\`${cmd[0].options.aliases.join(', ')}\``
                            });
                        }
                        embed
                            .setTitle(`Help | ${cmdName}`)
                            .setDescription(cmd[0].options.desc)
                            .addFields(fields)
                    }

                } else {
                    embed.setTitle('Help | All')
                    embed.setThumbnail(
                        'https://cdn.discordapp.com/avatars/'
                        + `${this.bot.id}/${this.bot.avatar}.png`
                    );
                    this.commands.forEach((cmd, name) => {
                        embed.addField({ name, value: cmd[0].options.desc })
                    });
                }
                res.send(embed);
                next();
            }, { desc: 'Get help on the usage of a command.' });
        }
    }

    /**
     * Command function
     * @param name Command name(s).
     * @param cb The function that is called when the command is ran.
     * @param  options Options for your command.
     * @returns client
     * ```typescript
     * cli.command(['ping', 'latency'], (req, res) => {
     *      res.send('Pong!)
     * ```
     * });
     */
    command(name: string | string[], cb: commandCallback, options?: commandOptions) {
        const option: commandOptions = {
            desc: options?.desc || 'No description was provided',
            aliases: Array.isArray(name) ? name.slice(1) : []
        };
        let defaultName = Array.isArray(name) ? name[0] : name;
        let old = this.commands.get(defaultName);
        let cmd = { cb, options: option }
        if (old) { old.push(cmd) } else { old = [cmd] }
        this.commands.set(defaultName, old);
        return this;
    }
    /**
     * @typeParam T The event name
     * @param cb The callback function
     * ```typescript
     * cli.on('ready', () => console.log ('Up and ready to go!'));
     * ```
     */
    on<T extends keyof Events>(event: T, cb: Events[T]) {
        this.events.set(event, cb);
        return this;
    }
    /**
     * a function that is ran before every command
     * @param  cb Your middleware function
     * @returns A client
     * @description
     * ```typescript
     * cli.use((req, res, next) => {
     *      req.send(`${req.command} has been used!`);
     *      next(); // call the next middlware/command
     * })
     * ```
     */
    use(cb: commandCallback) {
        this.middleware.push(cb);
        return this;
    }
    /**
     * options for bot status
     */

    /**
     * Log your bot into discord
     * @param token Your bot token
     * @param status Your Bot Status Options
     */
    async login(token: string | Buffer) {
        const next = (
            req: Request,
            res: Response,
            arr: { cb: commandCallback }[],
            i = 0,
            secondArr?: { cb: commandCallback }[]
        ) => {
            return () => {
                if (arr[i + 1]) {
                    arr[i + 1]?.cb(req, res, next(req, res, arr, i++));
                } else if (secondArr) {
                    secondArr[0]?.cb(req, res, next(req, res, secondArr, i++));
                }
            }
        }

        this.token = token.toString();
        // console.log (`Your Bot Token: ${token.toString()}`);

        this.connect(discordAPI.gateway);

        this.op(opCodes.hello, (data) => {
            // console.log (data);
            this.loop = setInterval(
                () => this.response.op.emit(1, 251),
                data.heartbeat_interval
            );
            this.response.op.emit(opCodes.indentify, {
                token: token.toString(),
                intents: 513,
                properties: {
                    $os: process.platform,
                    $browser: 'Fuwa.js',
                    $device: 'Fuwa.js',
                },
            });
        });
        this.op(opCodes.invalidSession, () => {
            throw new Error('Invalid token');
        });

        this.event('READY', (data) => {
            this.sessionId = data.session_id;
            this.bot = data.user;
            const ready = this.events.get('READY');
            if (ready) ready();
        });
        this.event('GUILD_CREATE', guild => this.cache.guilds.set(guild.id, guild));
        this.event('MESSAGE_CREATE', async (msg) => {
            console.time('command run');
            if (!msg.content) return;
            const res = new Response(msg, token.toString());
            let prefix = '';
            console.time('prefix parsing')
            if (typeof this.prefix === 'function') {
                prefix = await this.prefix(new Request(msg, this.token, this.cache))
            } else if (Array.isArray(this.prefix)) {
                prefix = this.prefix.find((p) => msg.content.startsWith(p));
            } else if (typeof this.prefix === 'string') {
                prefix = this.prefix;
            } else {
                throw new TypeError('Invalid prefix type');
            }
            console.timeEnd('prefix parsing');
            if (!prefix) return;
            console.time('command parsing')
            let commandName: string = '';

            let args: string[] = [];
            const str = msg.content.split(' ');
            const a = this.options.useMentionPrefix && str[0] === `<@!${this.bot.id}>`;

            if (str[0][0] !== prefix && !a) return;

            if ( this.options.debug ) console.log(str);

            args = str.slice(a ? 2 : 1);
            commandName = (a ? str[1] : str[0])
                .replace(prefix, '')
                .toLowerCase();
            let c = [...this.commands.entries()].find(v => {
                if (
                    v[0] === commandName
                    || v[1][0]
                        .options
                        .aliases
                        ?.includes(commandName)) {
                    return true;
                } else return false;
            });
            if(!c) return;
            const command = c[1];
            if (!command) return;
            console.timeEnd('command parsing')
            console.time('middleware')
            const _: any[] = [];
            this.middleware.forEach((v) => _.push({ cb: v }));
            const req = new Request(msg, token.toString(), this.cache);
            req.args = args;
            // console.log (req)
            if (this.middleware[0]) {
                this.middleware[0](req, res, next(req, res, _, 0, command));
            }
            console.timeEnd('middleware')
            console.time('run command')
            if (!this.middleware[0]) command[0].cb(req, res, next(req, res, command, 0));
            console.timeEnd('run command')
            console.timeEnd('command run')
        });
        //         this.ws.on('open', async function () {
        //             this.debug(`Connect to ${ discordAPI.gateway } `);
        //             this.on('message', async (e) => {
        //                 const res = JSON.parse(e.toString());
        //                 this.debug(`Incoming message from ${ discordAPI.gateway }:
        // Event: ${res.t}
        // OPCOde: ${res.op}
        // Other: ${res.s}
        // Data: ${JSON.stringify(res.d, null, this.debugMode ? 4 : 0).replace(
        //                     '\\',
        //                     ''
        //                 )}`);
        //                 switch (res.op) {
        //                     case opCodes.hello:
        //                         // Start heartbeat loop

        //                         this.debug(
        //                             `Attempting to identify with the following credentials: ${identify.replace(
        //                                 '\\',
        //                                 ''
        //                             )}`
        //                         );
        //                         this.debug('Credentials sent');

        //                         break;
        //                 }

        //                 switch (res.t) {
        //                     case 'ready':
        //                         this.debug(`
        //                             Logged in on ${new Date().toDateString()}
        //                         `);

        //                         this.bot = new User(res.d.user);
        //                         let fn = this.events.get('ready');
        //                         fn ? fn() : 0;
        //                         break;
        //                     case 'messageCreate':
        //                         let __ = this.events.get('msg');
        //                         __ ? __() : 0;
        //                         this.debug('Recived A Message :' + res.d.content);
        //                         let request: any = null; // new Request(token.toString(), res.d);
        //                         let response = new Response(res.d, token.toString());
        //                         const next = (
        //                             req: Request,
        //                             res: Response,
        //                             arr: { cb: commandCallback }[],
        //                             i = 0,
        //                             secoundArr?: { cb: commandCallback }[]
        //                         ) => {
        //                             return () => {
        //                                 arr[i + 1]
        //                                     ? arr[i + 1].cb(
        //                                           req,
        //                                           res,
        //                                           next(req, res, arr, i++)
        //                                       )
        //                                     : secoundArr
        //                                     ? secoundArr[0]
        //                                         ? secoundArr[0].cb(
        //                                               req,
        //                                               res,
        //                                               next(req, res, secoundArr, i++)
        //                                           )
        //                                         : 0
        //                                     : 0;
        //                             };
        //                         };
        //                         const prefix =
        //                             typeof this.prefix === 'function'
        //                                 ? await this.prefix(request)
        //                                 : Array.isArray(this.prefix)
        //                                 ? this.prefix.find((p) =>
        //                                       res.d.content.startsWith(p)
        //                                   )
        //                                 : this.prefix;

        //                         if (!prefix) {
        //                             throw new Error('No valid prefix found');
        //                         }
        //                         if (!res.d.content.startsWith(prefix)) break;
        //                         this.debug(
        //                             res.d.content.replace(prefix, '').toLowerCase()
        //                         );
        //                         let command = this.commands.get(
        //                             res.d.content.replace(prefix, '').toLowerCase()
        //                         );
        //                         // console.log (command);
        //                         // console.log (this.commands);
        //                         if (!command) {
        //                             let ___ = this.events.get('CMD_NOT_FOUND');
        //                             ___ ? ___() : 0;
        //                             break;
        //                         }
        //                         let _: any[] = [];
        //                         this.middleware.forEach((v) => _.push({ cb: v }));
        //                         this.middleware[0]
        //                             ? this.middleware[0](
        //                                   request,
        //                                   response,
        //                                   next(request, response, _, 0, command)
        //                               )
        //                             : 0;

        //                         try {
        //                             command[0].cb(
        //                                 request,
        //                                 response,
        //                                 next(request, response, command, 0)
        //                             );
        //                         } catch (e) {
        //                             let ____ = this.events.get('err');
        //                             if (!____) throw e;
        //                             ____();
        //                         }
        //                 }
        //             });
        //         });
    }
    logout(end = true) {
        if (this.ws && this.loop) {
            clearInterval(this.loop);
            if (end) process.exit();
        }
    }
    set<T extends keyof clientOptions>(key: T, val: clientOptions[T]): this {
        this.options[key] = val;
        return this;
    }
    setStatus(status: statusOptions) {
        let cred = {
            d: {
                presence: {
                    activities: [],
                    status: 'online',
                    afk: false,
                },
            }
        };
        let activities: any = [
            {
                name: status.name,
            },
        ];
        activities[0] = status?.type;

        cred.d.presence.activities = activities;
        cred.d.presence.status = status.status || 'online';
        cred.d.presence.afk = status.afk || false;

        this.status = cred;
    }
    async deleteMessages(amt: number, channelID: string) {
        const msgs: Message[] = await undici.GET(
            `/api/v8/channels/${channelID}/messages?limit=${amt}`,
            this.token
        ).catch(e => { console.error(e) });

        undici.OTHER('POST',
            `/api/v8/channels/${channelID}/messages/bulk-delete`,
            this.token, JSON.stringify({ messages: msgs.map(m => m.id) })
        ).catch(e => { console.error(e) });
    }
}

export default Client;
