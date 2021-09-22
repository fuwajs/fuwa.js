/******************************************************************************
 * @file src/lib/Client.ts
 * @fileoverview Exports the Client class - the main class in Fuwa.JS - alongside other
 * helper functions, interfaces, types, etc.
 *****************************************************************************/

import Request from './Request';
import Cache from './_Cache';
import Debug from './_Debug';
import { InvalidToken, InvalidPrefix } from './Errors';
import {
    discordAPI,
    Message,
    GatewayCodes,
    UserStatus,
    ActivityType,
    GatewayIntents,
} from './_DiscordAPI';
import User from './discord/User';
import http from './_http';
import Response from './Response';
import Emitter from './Emitter';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Argument, CommandCallback, commandOptions } from './Command';
import Embed from './discord/Embed';
import Colors from './Colors';
import { erlpack } from './_erlpack';
import Reaction from './discord/Reaction';
import { setBot, setDebug, setToken, token } from './_globals';
import Guild from './discord/Guild';
import Channel from './discord/Channel';

export type statusType = 'playing' | 'listening' | 'streaming' | 'competing';

/**
 * status options for bot
 */
export interface StatusOptions {
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
    ready();
    message(req: Request, res: Response);
    reaction(reaction: Reaction);
    'invalid command': (req: Request, res: Response) => any;
    'new guild': (guild: Guild) => any;
    'new channel': (guild: Guild) => any;

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
    applicationId?: string;
    /**
     * If this is turned on (true) When someone mentions your bot it will behave
     * as a prefix.
     */
    useMentionPrefix?: boolean;
    /**
     *
     */
    builtinCommands?: {
        help?:
            | {
                  embedColor?: string | number;
              }
            | false;
    };

    /**
     * @see GatewayIntents
     */
    intents: number;
    /**
     * The
     */
    parser: (
        prefix: string,
        msg: Message,
        options: clientOptions
    ) => [{ cb: CommandCallback; options: commandOptions }[], string[]] | false;

    /**
     * If the bot should cache guilds/channels/users or not.
     * It's suggested to keep this on for smaller bots
     * but for larger ones turn this off,
     * caching increases the speed of sending messages, but takes up memory.
     * meaning caching on = faster guild replies
     * caching off = more memory for other tasks
     */
    cache?: true;
    /**
     * Settings for caching
     */
    cachingSettings?: {
        /**
         * Clear the cache after a certain amount of time (in ms)
         * If this is false then the cache will never be cleared
         */
        clearAfter?: number | false;
        cacheOptions?: {
            guilds: boolean;
            channels: boolean;
            users: boolean;
        };

        /**
         * Maximum amount of items to cache at once. Set this to 0 if you want
         * an unlimited cache size
         */
        maxSize?: number;
    };
}

/**
 * The Client Class
 * @description The client class is the main starting point of your discord bot.
 * ```typescript
 * const fuwa = require('fuwa.js'); // Import Fuwa library
 * const client = new fuwa.Client('?'); // Create and initialize a Client
 * ```
 */
const next = (
    req: Request,
    res: Response,
    prefix: string,
    arr: { cb: CommandCallback }[],
    i = 0,
    secondArr?: { cb: CommandCallback }[]
) => {
    return () => {
        if (arr[i + 1]) {
            arr[i + 1]?.cb(req, res, next(req, res, prefix, arr, i++), prefix);
        } else if (secondArr) {
            secondArr[0]?.cb(req, res, next(req, res, prefix, secondArr, i++), prefix);
        }
    };
};

class Client extends Emitter {
    public bot: User;
    protected debug: Debug;
    private sessionId = '';
    public cache: Cache;
    protected status: any = [];
    protected applicationId = '';
    protected parser: clientOptions['parser'];
    // protected events: Map<keyof Events, eventCallback> = new Map();
    /* eslint-disable */
    public events = new Map<keyof Events, Function>();
    public prefix: string | string[] | ((req: Request) => Promise<string> | string);
    protected options: clientOptions;

    protected loop?: NodeJS.Timeout;
    public commands = new Map<
        string,
        { cb: CommandCallback; options: commandOptions }[]
    >();
    protected middleware: CommandCallback[] = [];
    /**
     * @param prefix The prefix for your bot
     */
    constructor(
        prefix: string | string[] | ((req: Request) => Promise<string> | string),
        options?: clientOptions
    ) {
        super();

        this.options = {
            cache: true,
            debug: false,
            useMentionPrefix: false,
            builtinCommands: {
                help: {
                    embedColor: Colors.blue,
                },
            },
            intents:
                GatewayIntents.Guilds |
                GatewayIntents.GuildMessages |
                GatewayIntents.GuildBans |
                GatewayIntents.DirectMessages,
            ...options,
        };
        this.applicationId = options.applicationId;
        this.debug = new Debug(this.options.debug ?? false);
        setDebug(this.debug);
        this.prefix = prefix;
        const caching: typeof options.cachingSettings = {
            clearAfter: 1.08e7, // 30 min
            cacheOptions: {
                channels: true,
                guilds: true,
                users: true,
            },
            ...options.cachingSettings,
        };
        this.cache = new Cache(caching);
        if (this.options?.builtinCommands?.help) {
            this.command(
                ['help', 'commands', 'h'],
                (req, res) => {
                    const color = this.options.builtinCommands.help
                        ? this.options.builtinCommands.help.embedColor
                        : Colors.red;
                    let embed = new Embed().setColor(color).setThumbnail(this.bot.avatar);
                    if (req.args.length > 0) {
                        const cmdName = req.args[0];
                        const cmd = this.commands.get(cmdName.toLowerCase());
                        if (!cmd) {
                            res.send(
                                embed
                                    .setColor(Colors.red)
                                    .setTitle('Error')
                                    .setDescription(
                                        `${cmdName} is not a valid command name.`
                                    )
                            );
                            return;
                        } else {
                            const fields = [];

                            if (cmd[0].options.args) {
                                const argNames = [...cmd[0].options.args.keys()];
                                fields.push({
                                    name: 'Arguments',
                                    value: `\`${argNames.join(', ')}\``,
                                });
                            }
                            if (cmd[0].options.aliases) {
                                fields.push({
                                    name: 'Aliases',
                                    value: `\`${cmd[0].options.aliases.join(', ')}\``,
                                });
                            }
                            embed
                                .setTitle(`Help | ${cmdName}`)
                                .setDescription(cmd[0].options.desc)
                                .addFields(fields);
                        }
                    } else {
                        embed.setTitle('Help | All');
                        this.commands.forEach((cmd, name) => {
                            embed.addField({
                                name,
                                value: cmd[0].options.desc,
                            });
                        });
                    }
                    res.send(embed);
                },
                { desc: 'Get help on the usage of a command.' }
            );
        }
        this.parser =
            options.parser ||
            ((prefix, msg, options) => {
                const str = msg.content.split(' ');
                const mentionPrefix =
                    this.options.useMentionPrefix && str[0] === `<@!${this.bot.id}>`;
                if (str[0].slice(0, prefix.length) !== prefix && !mentionPrefix)
                    return false;
                const commandName = (mentionPrefix ? str[1] : str[0])
                    .substr(prefix.length)
                    .toLowerCase();
                const [, commands] = [...this.commands.entries()].find(v => {
                    if (
                        v[0] === commandName ||
                        v[1][0].options.aliases?.includes(commandName)
                    ) {
                        return true;
                    } else return false;
                });

                if (!commands) return false;
                return [commands, str.slice(mentionPrefix ? 2 : 1)];
            });
    }
    protected async runCommand(msg: Message) {
        const req = new Request(msg, this.cache);
        const res = new Response(msg);
        const e = this.events.get('message');
        if (e) e(req, res);

        // console.time('command run');
        if (!msg.content) return;
        let prefix = '';
        // console.time('prefix parsing')
        if (typeof this.prefix === 'function') {
            prefix = await this.prefix(req);
        } else if (Array.isArray(this.prefix)) {
            prefix = this.prefix.find(p => msg.content.startsWith(p));
        } else if (typeof this.prefix === 'string') {
            prefix = this.prefix;
        } else {
            throw new InvalidPrefix(`${prefix} is not a valid prefix`);
        }
        // console.timeEnd('prefix parsing');
        if (!prefix) return;
        // console.time('command parsing')
        const parserRes = this.parser(prefix, msg, this.options);
        if (!parserRes) {
            this.events.has('invalid command')
                ? this.events.get('invalid command')(req, res)
                : '';
            return;
        }
        const [c, args] = parserRes;
        const command = c[0];
        if (!command) return;
        // console.timeEnd('command parsing')
        // console.time('middleware')
        const middlewareCommand = this.middleware.map(cb => ({ cb }));
        req.args = args;
        // console.log (req)

        if (this.middleware[0]) {
            this.middleware[0](
                req,
                res,

                next(req, res, prefix, middlewareCommand, 0, c),
                prefix
            );
        }
        if (!this.middleware[0])
            command.cb(req, res, next(req, res, prefix, c, 0), prefix);
    }
    /**
     * Command function
     * @param name Command name(s).
     * @param cb The function that is called when the command is ran.
     * @param options Options for your command.
     * @returns Command Options
     * @example
     * ```ts
     * cli.command(['ping', 'latency'], (req, res) => {
     *      res.send('Pong!');
     * });
     * ```
     */
    command(name: string | string[], cb: CommandCallback, options?: commandOptions) {
        let defaultName = Array.isArray(name) ? name.shift() : name;
        const option: commandOptions = {
            desc: options?.desc || 'No description was provided',
            aliases: Array.isArray(name) ? name : [],
        };
        let old = this.commands.get(defaultName);
        let cmd = { cb, options: option };
        old ? old.push(cmd) : (old = [cmd]);

        this.commands.set(defaultName, old);
        const main = old[0];
        const ret = {
            addAlias: (...aliases: string[]) => {
                main.options.aliases.push(...aliases);
                this.commands.set(defaultName, old);
                return ret;
            },

            addArgument: <T>(props: {
                name: string;
                desc?: string;
                parser?: (val: string) => T;
                default?: T;
                required?: boolean;
            }) => {
                if (!main.options.args) {
                    main.options.args = [];
                }
                main.options.args.push({
                    parser: props.parser || (v => String(v)),
                    default: props.default,
                    name: props.name,
                    required: props.required ?? false,
                    desc: props.desc || 'No description provided',
                });
                this.commands.set(defaultName, old);
            },
            createSlashCommand: (gid?: string) => {
                if (!this.applicationId)
                    throw new Error('Application Id is required to do this action');
                let path = `/applications/${this.applicationId}/commands`;
                if (gid) {
                    path += `/guilds/${gid}/commands`;
                } else {
                    path += '/commands';
                }
                return http.POST(
                    path,
                    JSON.stringify({
                        name: defaultName,
                        description: main.options.desc,
                    })
                );
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
     * @description A function that is ran before every command
     * @param  cb Your middleware function
     * @returns A **client** so you can *chain* methods.
     * @example
     * ```typescript
     * cli.use((req, res, next) => {
     *      req.send(`${req.command} has been used!`);
     *      next(); // call the next middlware/command
     * })
     * ```
     */
    use(cb: CommandCallback) {
        this.middleware.push(cb);
        return this;
    }
    protected initOp() {
        this.op(GatewayCodes.Hello, data => {
            this.debug.log(
                'hello',
                `Recieved Hello event and recieved:\n${this.debug.object(data, 1)}`
            );
            this.loop = setInterval(
                () => this.response.op.emit(GatewayCodes.Heartbeat, 251),
                data.heartbeat_interval
            );
            this.debug.log('discord login', 'Attempting to connect to discord');
            this.response.op.emit(GatewayCodes.Identify, {
                token: token.toString(),
                intents: this.options.intents,
                properties: {
                    $os: process.platform,
                    $browser: 'Fuwa.js',
                    $device: 'Fuwa.js',
                },
            });
        });
        this.op(GatewayCodes.InvalidSession, () => {
            this.debug.error(
                'invalid token',
                'Invalid token was passed, throwing a error...'
            );
            throw new InvalidToken('Invalid token');
        });
    }
    protected initEvents() {
        this.event('READY', data => {
            this.debug.success(
                'bot online',
                'Logged into discord, with everything intact'
            );
            this.sessionId = data.session_id;
            this.bot = new User(data.user);
            setBot(this.bot);
            data.guilds.forEach(g => {
                console.log(g);
                this.debug.success('guild recieved', `${g.id} Received, `);
                g.unavailable ? '' : this.cache.cache('guilds', new Guild(g));
            });
            const ready = this.events.get('ready');
            if (ready) ready();
        });
        this.event('MESSAGE_REACTION_ADD', json => {
            if (this.events.has('reaction')) {
                this.events.get('reaction')(new Reaction(json));
            }
        });
        this.event('GUILD_CREATE', g => {
            const guild = new Guild(g);
            this.cache.cache('guilds', guild);
            if (this.events.has('new guild')) {
                this.events.get('new guild')(guild);
            }
        });
        this.event('INVALID_SESSION', () => {
            this.debug.error(
                'invalid token',
                'Invalid token was passed, throwing a error...'
            );
            throw new InvalidToken('Invalid token');
        });
        this.event('MESSAGE_CREATE', this.runCommand.bind(this));
    }
    getGlobalSlashCommands() {
        if (!this.applicationId)
            throw new Error('Application Id is required to do this action');
        return http.GET(`/applications/${this.applicationId}/commands`);
    }
    getGuildSlashCommand(gid: string) {
        return http.GET(`/applications/${this.applicationId}/guilds/${gid}/command`);
    }

    /**
     * options for bot status
     */

    /**
     * @description Log your bot into discord
     * @param token Your bot token
     * @param status Your Bot Status Options
     */
    async login(token?: string | Buffer) {
        this.debug.log('login started', 'Login is function is attempting to run...');
        setToken(process.env.TOKEN || token.toString());
        this.debug.log('connecting', 'Attempting to connect to discord');
        this.connect(discordAPI.gateway, {
            v: 9,
            encoding: erlpack ? 'etf' : 'json',
        });
        this.initOp();
        this.initEvents();
        return this;
    }
    logout(end = true) {
        if (this?.ws && this.loop) {
            clearInterval(this.loop);
            if (end) process.exit();
        }
    }
    /**
     *
     * @returns List of guilds
     */
    async getGuildIds(): Promise<string[]> {
        return (await http.GET('/users/@me/guilds')).map(g => g.id);
    }
    async getGuild(gid: string) {
        return new Guild(await http.GET(`/guilds/${gid}`));
    }
    async createDM(uid: string) {
        return new Channel(
            await http.POST('/users/@me/channels', JSON.stringify({ recipient_id: uid }))
        );
    }
    modifyBot(username: string) {
        return http.PATCH('/users/@me', JSON.stringify({ username }));
    }
    set<T extends keyof clientOptions>(key: T, val: clientOptions[T]): this {
        this.options[key] = val;
        return this;
    }
    setStatus(status: StatusOptions) {
        let cred = {
            d: {
                presence: {
                    activities: [],
                    status: 'online',
                    afk: false,
                },
            },
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
        return this;
    }
    async deleteMessages(amt: number, channelID: string) {
        const msgs: Message[] = await http
            .GET(`/channels/${channelID}/messages?limit=${amt}`)
            .catch(e => {
                console.error(e);
            });

        return http
            .POST(
                `/channels/${channelID}/messages/bulk-delete`,
                JSON.stringify({ messages: msgs.map(m => m.id) })
            )
            .catch(e => {
                console.error(e);
            });
    }
    async getUser(uid: string): Promise<User> {
        return new User(await http.GET(`/users/${uid}`));
    }
}

export default Client;
