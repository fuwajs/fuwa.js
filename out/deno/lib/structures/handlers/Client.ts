import { Buffer } from "https://deno.land/std@0.85.0/node/buffer.ts";
import { WebSocket } from '../internet/WebSocket.ts';
import {
    DISCORD_API,
    GatewayCommands,
    GatewayIntents,
    GatewayPresenceUpdate,
} from '../../../interfaces/DiscordAPI.ts';
import { Command, CommandCallback } from './Command.ts';
import Globs from '../../../util/Global.ts';
import { InvalidToken } from '../../../util/Errors.ts';
// import { setCachePromise } from '../../../util/index.ts';
import { debug as Debug } from '../../../util/Debug.ts';
import {
    EventHandlers,
    GatewayEventsConverter,
    GatewayEventArgConverter,
} from '../../../interfaces/EventHandler.ts';
import {
    GatewayOpcodes,
    ApplicationCommand,
    InteractionTypes,
    ApplicationCommandType,
    Identify,
    Activity,
    ActivityType,
    Resume,
    HTTPResponseCodes,
} from '../../../interfaces/index.ts';
import http from '../internet/http.ts';
import { enumPropFinder, getArgs, isBrowser, parseDiscordEventNames } from '../../../util/index.ts';
import { Plugin } from './Plugin.ts';
import { Guild } from '../../discord/Guild.ts';
import { User, BotUser } from '../../discord/User.ts';

import { Channel } from '../../discord/Channel.ts';
import Context from '../../discord/Context.ts';
import { Argument, Cache, MemoryCache } from '../index.ts';

export interface ClientOptions {
    /**
     * The discord token to connect to the [Discord api](https://discord.com/developers/docs/intro).
     * This is required to start your client.
     * @since 1.0.0
     * @default undefined
     * @returns string
     */
    token?: string | Buffer;
    /**
     * An array of all fuwa.js#plugins assigned to the client class.
     * @since 1.0.0
     * ```typescript
     *  class Logger extends Plugin {
     *  constructor() {
     *       super({ name: 'Logger' });
     * }
     * event(client, data) {
     *      console.log(data)
     * }
     * ```
     * @default undefined
     *  */
    plugins?: Plugin[];
    /**
     * Discord Intends, enabling bot functions with our api.
     * @see https://discord.com/developers/docs/topics/gateway#gateway-intents
     * @example
     */
    intents?: (keyof typeof GatewayIntents | GatewayIntents)[];
    /**
     * The owner(s) discord ID. These users can bypass default bot permissions.
     * @default undefined
     */
    owners?: string[] | string;
    mountingCommands?: CommandCallback<any>[];
    /**
     * A simple and easy way to access your R.A.M through our API.
     * Your cache can story any type of value set into it. Keep in mind when your bot resets or shuts down all data in the cache will be deleted.
     * This should not be used as a form of storage for information but to simply make common task such as fetching channels quicker.
     * @example
     * ```typescript
     * const client = new Client({
     * // other client options here...
     * })
     * client.cache.set("id", "value")
     * ```
     */
    cache?: Cache | false;
    /**
     * Shards are a way to extends your node or deno process for your bot.
     * They allow for multiple instances of your bot split between different servers to
     * improve performance and bot stability.
     * @see https://discord.com/developers/docs/topics/gateway#sharding
     * @since 1.0.0
     * @default 1
     * @returns A
     */
    shards?: number;
    /**
     * Your Discord bot ID. This is required for using some of fuwa.js built in slash command functions
     * @see https://discord.com/developers/applications
     * @returns string of your ID
     */
    applicationId?: string;
}

export type StatusUpate = Omit<GatewayPresenceUpdate, 'since' | 'activities'> & {
    since?: Date;
    activities?: (Omit<Activity, 'timestamps' | 'type' | 'application_id'> & {
        type: keyof typeof ActivityType;
        timestamps?: { start?: Date; end?: Date };
        /** The application ID for the game your playing */
        gameId?: string;
    })[];
    /** A specific guild you want to change your status in */
    guildId?: string;
};

/**
 * The base Client to access and configure your discord bot.
 * The client should be imported from fuwa.js and extended either as a variable or class.
 * @extends WebSocket
 * @example
 * ```typescript
 * import { Client } from "fuwa.js"
 * const bot = new Client({})
 * // or
 * class bot extends Client {}
 * ```
 * Both will work in javascript or typescript.
 */
export class Client extends WebSocket {
    /** A Map of fuwa#client events*/
    public events = new Map<keyof EventHandlers, (...args: any[]) => any>();
    /** A Map of commands */
    public commands = new Map<string, Command<any>>();
    public plugins: Plugin[];
    public bot: BotUser | null = null;
    /** Interaction listeners for buttons */
    public _interactionListeners = new Map<string, CommandCallback<any>>();
    /** Commands that will be mounted before the ready event */
    public mountingCommands = new Array<Command<any>>();
    public shardCount: number;
    /** Your bot ID */
    public applicationId: string;
    protected session = { id: '', seq: 0 };
    protected status: GatewayPresenceUpdate | null = null;
    public cache: Cache;
    /**
     * DiscordAPI GateWay Intents
     **/
    protected intents: (keyof typeof GatewayIntents)[];
    /** @internal */
    protected token = '';
    public botStatus: 'READY' | 'LOADING' = 'LOADING';
    /** Options to pass to the client */
    protected options: ClientOptions;
    /** @internal */
    protected debug: typeof Debug;
    /** @internal */
    protected loop?: NodeJS.Timeout;
    public constructor(options?: ClientOptions) {
        super();
        Object.assign(this, {
            intents: ['DirectMessages', 'Guilds', 'GuildMessages'],
            plugins: [],
            ...options,
        });
        if (options) {
            this.applicationId = options.applicationId ?? '';
            this.shardCount = options.shards ?? 0;
            this.token = options.token ? options.token.toString() : '';
        }
        if ((options ?? {})?.cache === false) {
            this.cache = {
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                clear() {},
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                set(_a, _b, _c) {}, // eslint-disable-line @typescript-eslint/no-unused-vars
                get(_, fb) {
                    return fb();
                },
            };
        } else if ((options ?? {}).cache == null) {
            this.cache = new MemoryCache();
        } else {
            //@ts-ignore
            this.cache = options.cache;
        }
        this.shardCount = 0;
        Globs.cache = this.cache;
    }

    /**
     * @typeParam T The event name
     * @param cb The callback function
     * ```typescript
     * client.on('ready', () => console.log ('Up and ready to go!'));
     * ```
     */
    public on<T extends keyof EventHandlers>(event: T, callback: EventHandlers[T]) {
        this.events.set(event, callback);
        return this;
    }
    /**
     * Alias for on
     */
    once = this.on;
    /**
     * Mounts a command at runtime
     * @param cmd The slash command to mount to the client.
     */
    public async mountCommand<T>(cmd: Command<T>) {
        if (!(this.applicationId || Globs.appId))
            throw new Error(
                'Application Id is required to do this action.  Please add this option to your client.'
            );
        let path = `/applications/${this.applicationId || Globs.appId}`;
        if (cmd.guild) {
            path += `/guilds/${cmd.guild}/commands`;
        } else {
            path += '/commands';
        }
        http.POST(path, JSON.stringify(cmd)).then(command => {
            this.commands.set(command.data.id, cmd);
        });
        return this;
    }

    /**
     * Deletes a command from the discord api.
     * @param cmd command id
     * @param guildId only needed if your command is a guild command and your id is a string
     */
    public unmountCommand(cmd: Command<any> | string, guildId?: string) {
        if (!this.applicationId)
            throw new Error(
                'Application Id is required to do this action. Please add this option to your client.'
            );
        const guild: string | null = typeof cmd === 'string' ? guildId || null : cmd.guild || null;
        const cmdId = typeof cmd === 'string' ? cmd : cmd.id;
        let path = `/applications/${this.applicationId}`;
        if (guild) {
            path += `/guilds/${guild}/commands`;
        } else {
            path += '/commands';
        }
        return http.DELETE(path + `/${cmdId}`);
    }

    /**
     * Allows easy access to the fuwa.js#Guild information.
     * @param gid Id of the guild you want to fetch
     * @param withSize If you want the guild to contain the approximant member count of the guild (and presences), warning this may slow down the request so only use if needed
     * @returns A Guild, or null if the guild was not found
     */
    public getGuild(gid: string, withSize = false, force = false): Promise<Guild> {
        const fallback = () =>
            http.GET(`/guilds/${gid}?with_counts=${withSize}`).then(res => new Guild(res.data));

        return force ? fallback() : this.cache.get(`guild.${gid}`, fallback);
    }
    public getUser<T extends '@me' | string>(uid: T): Promise<(T extends '@me' ? BotUser : User) | null> {
        return (
            http
                .GET(`/users/${uid}`)
                // Basically checks if the uid is @me to make a bot user out of it
                .then(res => (uid === '@me' ? (this.bot = new BotUser(res.data)) : new User(res.data)))
        );
    }
    public getChannel(cid: string, force = false): Promise<Channel | null> {
        const fallback = () => http.GET(`/channels/${cid}`).then(res => new Channel(res.data));
        // .then(setCachePromise(`channels.${cid}`));
        return force ? fallback() : this.cache.get(`channels.${cid}`, fallback);
    }
    /**
     * Returns all mounted commands and there discord data.
     * @param guildId the id of the guild your application command is registered in.
     */
    public getMountedCommands(guildId?: string): Promise<ApplicationCommand[]> {
        let path = `/applications/${this.applicationId}`;
        if (guildId) {
            path += `/guilds/${guildId}/commands`;
        } else {
            path += '/commands';
        }
        return http.GET(path).then(res => res.data);
    }
    protected loginFunctions(isResume = false) {
        this.connect(DISCORD_API.gateway, 9);
        this.wsEvent('message', data => {
            this.plugins.forEach(plugin => plugin.event(this, data));
            if (data.op === GatewayOpcodes.Dispatch && data.t) {
                const eventName = GatewayEventsConverter[data.t] || parseDiscordEventNames(data.t);
                const event = this.events.get(eventName);
                if (!event || eventName === 'ready') return;
                const args = (GatewayEventArgConverter[eventName] || (d => [d]))(data.d);
                event(...args);
            }
            if (data.s) {
                this.session.seq = data.s;
            }
        });
        this.wsEvent('close', ({ code }) => {
            if (code !== 1000) {
                this.connect(DISCORD_API.gateway, 9);
                console.log('closed');
                this.loginFunctions(true);
            }
        });
        this.op(GatewayOpcodes.Hello, data => {
            // this.debug.log('hello', `Received Hello event and received:\n${this.debug.object(data, 1)}`);
            setInterval(
                () =>
                    this.response.op.emit(GatewayOpcodes.Heartbeat, data.heartbeat_interval * Math.random()),
                data.heartbeat_interval
            );
            const intents = this.intents.map(intent => GatewayIntents[intent]).reduce((a, b) => a | b);
            const auth: Identify | Resume = isResume
                ? ({
                      token: Globs.token,
                      session_id: this.session.id,
                      seq: this.session.seq,
                  } as Resume)
                : ({
                      token: Globs.token,
                      intents,
                      properties: {
                          // @ts-ignore
                          $os: isBrowser() ? Deno.build.os : process.platform,
                          $browser: 'Fuwa.js',
                          $device: 'Fuwa.js',
                      },
                      presence: this.status,
                  } as Identify);

            // this.debug.log('discord login', 'Attempting to connect to discord');
            this.response.op.emit(isResume ? GatewayOpcodes.Resume : GatewayOpcodes.Identify, auth);
        });
        this.op(GatewayOpcodes.Reconnect, () => {
            this.response.op.emit(GatewayOpcodes.Resume, {
                token: Globs.token,
                session_id: this.session.id,
                seq: this.session.seq,
            });
        });
        this.op(GatewayOpcodes.Heartbeat, () =>
            this.response.op.emit(GatewayOpcodes.Heartbeat, Math.random())
        );
        this.op(GatewayOpcodes.InvalidSession, () => {
            throw new InvalidToken();
        });
        this.event('READY', ready => {
            this.bot = new BotUser(ready.user);
            Globs.client = this;
            this.token = Globs.token;
            Globs.appId = this.applicationId = ready.application.id;
            this.botStatus = 'READY';
            Globs.sessionId = ready.session_id;
            this.mountingCommands.forEach(async cmd => await cmd.mount());
            this.session = {
                id: ready.session_id,
                seq: 0,
            };
            this.events.has('ready') ? this.events.get('ready')(ready.shard) : void 0;
        });
        this.event('GUILD_CREATE', _guild => {
            const guild = new Guild(_guild as any);
            this.events.has('new guild') ? this.events.get('new guild')(guild) : void 0;
        });
        this.event('INTERACTION_CREATE', async interaction => {
            if (!interaction.data) return;
            if (interaction.type === InteractionTypes.ApplicationCommand) {
                const cmd = this.commands.get(interaction.data?.id);
                if (cmd && cmd.run) {
                    const args = await getArgs(interaction.data?.options);
                    cmd.run(new Context(interaction), args);
                } else {
                    console.log('Invalid command used');
                }
            } else if (interaction.type === InteractionTypes.MessageComponent) {
                const id = interaction.data.custom_id;
                const cb = this._interactionListeners.get(id);
                if (cb) cb(new Context(interaction));
            }
        });
        this.event('INVALID_SESSION', () => {
            throw new InvalidToken();
        });
    }
    /** Connects the websocket client to discords api.
     * @param token Your discord bot token.
     * @see https://discord.com/developers/applications
     */
    public async login(token?: string | Buffer) {
        const _token = this.token || token.toString();
        Globs.token = _token;
        DISCORD_API.gateway = await http.GET(`/gateway/bot`).then(({ status, data }) => {
            if (status === HTTPResponseCodes.Unauthorized) throw new InvalidToken();
            return data.url;
        });
        this.connect(DISCORD_API.gateway, 9);
        this.loginFunctions();
    }
    public logout<T extends boolean>(end?: T): T extends true ? void : never {
        if (this?.ws && this.loop) {
            clearInterval(this.loop);
            this.ws.close(1000);
        }
        if (end) process.exit();
        return;
    }
    setStatus(data: StatusUpate) {
        this.status = {
            ...data,
            since: data.since.valueOf(),
            activities: data.activities
                ? data.activities.map(({ gameId, ...val }) => ({
                      ...val,
                      timestamps: val.timestamps
                          ? { end: val.timestamps.end?.valueOf(), start: val.timestamps.start?.valueOf() }
                          : undefined,
                      type: ActivityType[val.type],
                      application_id: gameId,
                  }))
                : undefined,
        };
        if (this.connected && this.botStatus === 'READY') {
            this.response.op.emit(GatewayOpcodes.StatusUpdate, {
                activities: this.status.activities,
                client_status: {
                    web: 'Fuwa.js',
                },
                guild_id: data.guildId,
                status: this.status.status,
                user: {
                    id: this.bot.id,
                },
            });
        }
    }

    /**
     *
     * @param shardId the shard(s) spawned from websocket
     * @param data discord raw api json
     */
    async spawnShard(shardId: number, data: Identify) {
        this.response.op.emit(GatewayOpcodes.Identify, {
            ...data,
            shard: [shardId, this.shardCount],
        });
        this.debug.log('shards', `Sent shard ${shardId}`);
    }

    public command<T>(
        /** The name of your slash command. */
        name: string,
        /** Command API Data */
        data:
            | CommandCallback<T>
            | {
                  /** Your command description */
                  desc?: string;
                  /** The arguments/options for this command. */
                  args?: Argument<any, any, any>[];
                  /** The guild ID to POST this slash command. */
                  guild?: string;
                  type?: keyof typeof ApplicationCommandType;
              },
        /** The callback function and your command logic*/
        cb?: CommandCallback<T>
    ) {
        let callback: CommandCallback<T>;
        if (typeof data === 'function') {
            callback = data;
        } else {
            callback = cb;
        }
        if (!callback) {
            throw new Error('A Callback is required to do this action');
        }
        const info = { ...(typeof data === 'object' ? data : {}) };
        const cmd = new Command({
            description: info.desc,
            run: callback,
            name,
            guild: info.guild,
            type: info.type,
        });
        info.args && info.args.forEach(arg => cmd.addArg(arg));
        this.mountingCommands.push(cmd);
        return this;
    }
}
