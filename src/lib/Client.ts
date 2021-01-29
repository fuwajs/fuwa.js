import Request from './Request';
import Cache from './_Cache';
import Debug from './_Debug';
import { InvalidToken } from './Errors';
import {
    discordAPI, Message, OpCodes, UserStatus,
    ActivityType,
    GatewayIntents,
} from './_DiscordAPI';
import User from './User';
import undici from './_unicdi';
import Response from './Response';
import Emitter from './Emitter';
import { Argument, commandCallback, commandOptions } from './Command';
import Embed from './discord/Embed';
import Colors from './Colors';
import { erlpack } from './_erlpack';
import Reaction from './discord/Reaction';

export type statusType = 'playing' | 'listening' | 'streaming' | 'competing';

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
    type?: ActivityType;
    /**
     * The URL of a stream
     */

    url?: string;

    /**
     * The status of your bot. Online by default
     */
    status?: UserStatus;
    /**
     * Whether or not the bot is afk.
     */
    afk?: boolean;
}



export interface Events {
    ready(): void | Promise<void>;
    message(req: Request, res: Response): void | Promise<void>;
    commandNotFound(req: Request, cmd: commandCallback): void | Promise<void>;
    reaction(reaction: Reaction)
    // ERR(err: Error): void | Promise<void>;
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
        help?: {
            embedColor?: string|number
        }|false;
    },

    /**
     * @see GatewayIntents
     */
    intents: number

    /**
     * If the bot should cache guilds/channels/users or not. 
     * It's suggested to keep this on for smaller bots
     * but for larger ones turn this off,
     * caching increases the speed of sending messages, but takes up memory.
     * meaning caching on = faster guild replies
     * caching off = more memory for other tasks
     */
    cache?: true,
    /**
     * Settings for caching
     */
    cachingSettings?: {
        /**
         * Clear the cache after a certain amount of time (in ms)
         * If this is false then the cache will never be cleared
         */
        clearAfter?: number | false,
        cacheOptions?: {
            guilds: boolean
            channels: boolean
            users: boolean
        }

        /**
         * Maximum amount of items to cache at once. Set this to 0 if you want
         * an unlimited cache size
         */
        maxSize?: number;
    }
}


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
    protected debug: Debug;
    private sessionId = '';
    public cache: Cache
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
        this.options = {
            cache: true,
            debug: false,
            useMentionPrefix: false,
            builtinCommands: {
                help: {
                    embedColor: Colors.blue
                }
            },
            intents: GatewayIntents.guilds + GatewayIntents.guildMessages,
            ...options,
        };
        this.debug = new Debug(this.options.debug ?? false);
        this.prefix = prefix;
        const caching: typeof options.cachingSettings = {
            clearAfter: options
                ?.cachingSettings
                ?.clearAfter ?? 1.08e+7, // 30 minutes
            cacheOptions: options?.cachingSettings?.cacheOptions || {
                channels: true,
                guilds: true,
                users: true
            },
        }
        this.cache = new Cache(caching);
        if (this.options?.builtinCommands?.help) {
            this.command(['help', 'commands', 'h'], (req, res) => {
                const color = this.options.builtinCommands.help ? this.options.builtinCommands.help.embedColor : Colors.red 
                let embed = new Embed()
                    .setColor(color)
                    .setThumbnail(this.bot.avatar);
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

                        if (cmd[0].options.args) {
                            const argNames = [...cmd[0].options.args.keys()];
                            fields.push({ name: 'Arguments', value: `\`${argNames.join(', ')}\`` })
                        }
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
                    this.commands.forEach((cmd, name) => {
                        embed.addField({ name, value: cmd[0].options.desc })
                    });
                }
                res.send(embed);
            }, { desc: 'Get help on the usage of a command.' });
        }
    }

    /**
     * Command function
     * @param name Command name(s).
     * @param cb The function that is called when the command is ran.
     * @param  options Options for your command.
     * @returns Command Options
     * ```js
     * cli.command(['ping', 'latency'], (req, res) => {
     *      res.send('Pong!');
     * });
     * ```
     */
    command(name: string | string[], cb: commandCallback, options?: commandOptions) {
        let defaultName = Array.isArray(name) ? name.shift() : name;
        const option: commandOptions = {
            desc: options?.desc || 'No description was provided',
            aliases: Array.isArray(name) ? name : []
        };
        let old = this.commands.get(defaultName);
        let cmd = { cb, options: option }
        if (old) { old.push(cmd) } else { old = [cmd] }
        this.commands.set(defaultName, old);

        const ret = {
            addAlias: (...aliases: string[]) => {
                old[0].options.aliases.push(...aliases);
                this.commands.set(defaultName, old);
                return ret;
            },

            addArgument: <T>(name: string, desc: string, defaultVal?: T) => {
                let args = old[0].options.args;
                if (!args) args = new Map<string, Argument<unknown>>();

                args.set(name, new Argument<T>(desc, defaultVal));
                this.commands.set(defaultName, old);
                return ret;
            },

            // exit: () => this
        };
        return ret;
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
     * A function that is ran before every command
     * @param  cb Your middleware function
     * @returns A **client** so you can *chain* methods.
     * @description
     * ```js
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
        this.debug.log('login started', 'Login is function is attempting to run...');
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

        // this.connect(discordAPI.gateway);
        this.debug.log('connecting', 'Attempting to connect to discord');
        let options: { v: number, encoding: 'etf' | 'json' } = {
            v: 8,
            encoding: erlpack ? 'etf' : 'json'
        }
        this.connect(discordAPI.gateway, options);
        this.debug.success(
            'connected',
            `Connected to ${discordAPI.gateway} version ${options.v}, with ${options.encoding} encoding.`);
        this.op(OpCodes.hello, (data) => {
            this.debug.log('hello',
                `Recieved Hello event and recieved:\n${this.debug.object(data, 1)}`
            );
            this.loop = setInterval(
                () => this.response.op.emit(OpCodes.heartbeat, 251),
                data.heartbeat_interval
            );
            this.debug.log('discord login', 'Attempting to connect to discord');
            this.response.op.emit(OpCodes.indentify, {
                token: token.toString(),
                intents: this.options.intents,
                properties: {
                    $os: process.platform,
                    $browser: 'Fuwa.js',
                    $device: 'Fuwa.js',
                },
            });
        });
        this.op(OpCodes.invalidSession, () => {
            this.debug.error('invalid token', 'Invalid token was passed, throwing a error...');
            throw new InvalidToken('Invalid token');
        });

        this.event('READY', (data) => {
            this.debug.success('bot online', 'Logged into discord, with everything intact');
            this.sessionId = data.session_id;
            this.bot = new User(data.user, token.toString());
            data.guilds.forEach(g => g.unavailable ? '' : this.cache.cache('guilds', g))
            const ready = this.events.get('ready');
            if (ready) ready();
        });
        this.event('MESSAGE_REACTION_ADD', (json) => {
            console.log('json');
            if (this.events.has('reaction'))  {
                this.events.get('reaction')(
                    new Reaction(json, this.token, this.bot),
                )
            }
        });
        this.event('GUILD_CREATE', guild => this.cache.cache('guilds', guild));
        this.event('MESSAGE_CREATE', async (msg) => {
            const e = this.events.get('message');
            if (e) e(new Request(msg, this.token, this.cache, this.bot), new Response(msg, this.token, this.bot));

            // console.time('command run');
            if (!msg.content) return;
            const res = new Response(msg, this.token, this.bot);
            let prefix = '';
            // console.time('prefix parsing')
            if (typeof this.prefix === 'function') {
                prefix = await this.prefix(new Request(msg, this.token, this.cache, this.bot))
            } else if (Array.isArray(this.prefix)) {
                prefix = this.prefix.find((p) => msg.content.startsWith(p));
            } else if (typeof this.prefix === 'string') {
                prefix = this.prefix;
            } else {
                throw new TypeError('Invalid prefix type');
            }
            // console.timeEnd('prefix parsing');
            if (!prefix) return;
            // console.time('command parsing')
            let commandName: string = '';

            let args: string[] = [];
            const str = msg.content.split(' ');
            const a = this.options.useMentionPrefix && str[0] === `<@!${this.bot.id}>`;

            if (str[0].slice(0, prefix.length) !== prefix && !a) return;

            if (this.options.debug) console.log(str);

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
            if (!c) return;
            const command = c[1];
            if (!command) return;
            // console.timeEnd('command parsing')
            // console.time('middleware')
            const middlewareCommand = this.middleware.map(cb => ({ cb }))
            const req = new Request(msg, token.toString(), this.cache, this.bot);
            req.args = args;
            // console.log (req)

            if (this.middleware[0]) {
                this.middleware[0](req, res, next(req, res, middlewareCommand, 0, command));
            }
            // console.timeEnd('middleware');
            // console.time('run command');
            if (!this.middleware[0]) command[0].cb(req, res, next(req, res, command, 0));
            // console.timeEnd('run command');
            // console.timeEnd('command run');
        });
    }
    logout(end = true) {
        if (this?.ws && this.loop) {
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
            `/channels/${channelID}/messages?limit=${amt}`,
            this.token
        ).catch(e => { console.error(e) });

        undici.POST(
            `/channels/${channelID}/messages/bulk-delete`,
            this.token,
            JSON.stringify({ messages: msgs.map(m => m.id) })
        ).catch(e => { console.error(e) });
    }
}

export default Client;