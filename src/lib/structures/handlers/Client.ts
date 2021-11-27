import { WebSocket } from '../ws/WebSocket';
import { discordAPI, GatewayCommands, GatewayIntents } from '../../../interfaces/DiscordAPI';
import { ArgumentConverter, Command, CommandCallback } from './Command';
import Globs from '../../../util/Global';
import { InvalidToken } from '../../../util/Errors';
// import { setCachePromise } from '../../../util';
import { debug as Debug } from '../../../util/Debug';
import {
    EventHandlers,
    GatewayEventsConverter,
    GatewayEventArgConverter,
} from '../../../interfaces/EventHandler';
import {
    GatewayOpcodes,
    ApplicationCommand,
    InteractionTypes,
    CommandOptionTypes,
} from '../../../interfaces';
import http from '../ws/http';
import { isBrowser } from '../../../util';
import { Plugin } from './Plugin';
import { Guild } from '../../discord/Guild';
import { User, BotUser } from '../../discord/User';

import { Channel } from '../../discord/Channel';
import Context from '../../discord/Context';
import { Argument, Cache, MemoryCache } from '..';

export interface ClientOptions {
    /** Discord Bot Token */
    token?: string | Buffer;
    /** An array of all fuwa.js#plugins assigned to the client class. */
    plugins?: Plugin[];
    /**
     * @description Discord Intends, enabling bot functions with our api.
     * @see https://discord.com/developers/docs/topics/gateway#gateway-intents
     */
    intents?: (keyof typeof GatewayIntents | GatewayIntents)[];
    /**
     * The owner(s) discord ID. These users can bypass default bot permissions.
     */
    owners?: string[] | string;
    mountingCommands?: CommandCallback[];
    cache?: Cache | false;
    /**
     * TODO shard manager
     */
    shards?: number;
    /**
     * Your Bot ID
     * @see https://discord.com/developers/applications
     */
    applicationId?: string;
}

export class Client extends WebSocket {
    /** A Map of fuwa#client events*/
    public events = new Map<keyof EventHandlers, (...args: any[]) => any>();
    /** A Map of commands */
    public commands = new Map<string, Command>();
    public plugins: Plugin[];
    public bot: BotUser | null = null;
    /** Interaction listeners for buttons */
    public _interactionListeners = new Map<string, CommandCallback>();
    /** Commands that will be mounted before the ready event */
    public mountingCommands = new Array<Command>();
    /** The message prefix. */
    public defaultPrefix: string | null;
    public shardCount: number;
    /** Your bot ID */
    public applicationId: string;
    protected session = { id: '', seq: 0 };
    public cache: Cache;
    /** DiscordAPI GateWay Intents */
    protected intents: (keyof typeof GatewayIntents)[];
    protected token = '';
    /** Options to pass to the client */
    protected options: ClientOptions;
    protected debug: typeof Debug;
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
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                set(_a, _b, _c) {},
                async get(_, fb) {
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
    /** Mounts a command at runtime
     * @param cmd The slash command to mount to the client.
     */
    public async mountCommand(cmd: Command) {
        if (!(this.applicationId || Globs.appId))
            throw new Error('Application Id is required to do this action');
        let path = `/applications/${this.applicationId || Globs.appId}`;
        if (cmd.guild) {
            path += `/guilds/${cmd.guild}/commands`;
        } else {
            path += '/commands';
        }
        http.POST(path, JSON.stringify(cmd.toJSON())).then(command => {
            this.commands.set(command.data.id, cmd);
        });
        return this;
    }

    /**
     * Deletes a command from the discord api.
     * @param cmd command or command id
     * @param guildId only needed if your command is a guild command and your id is a string
     */
    public unmountCommand(cmd: Command | string, guildId?: string) {
        if (!this.applicationId) throw new Error('Application Id is required to do this action');
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
     *
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
     * Returns all mounted commands.
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
    protected parseDiscordEventNames(e: string): string {
        let str = e
            .toLowerCase()
            .replace(/_/g, ' ')
            // Easily fixable bugs
            .replace(/delete|remove/g, 'removed')
            .replace('typing start', 'typing');
        if (str.includes('create') || str.includes('add')) {
            str = str.replace(' create', '').replace(' add', '');
            str = 'new ' + str;
        }
        if (str.includes('all')) {
            str = `all ${str.replace(' all', '')}`;
        }
        if (
            str.includes('guild') &&
            (str.includes('role') || str.includes('member') || str.includes('ban') || str.includes('emojis'))
        ) {
            str = str.replace('guild ', '');
        }
        return str.replace('new ban', 'ban');
    }

    /** Connects the websocket client to discords api.
     * @param token Your discord bot token.
     * @see https://discord.com/developers/applications
     */
    public login(token?: string | Buffer) {
        const _token = this.token || token.toString();
        Globs.token = _token;
        this.connect(discordAPI.gateway, 9);
        this.op(GatewayOpcodes.Hello, data => {
            // this.debug.log('hello', `Received Hello event and received:\n${this.debug.object(data, 1)}`);
            setInterval(
                () =>
                    this.response.op.emit(GatewayOpcodes.Heartbeat, data.heartbeat_interval * Math.random()),
                data.heartbeat_interval
            );
            const intents = this.intents.map(intent => GatewayIntents[intent]).reduce((a, b) => a | b);
            this.wsEvent('message', data => {
                this.plugins.forEach(plugin => plugin.event(this, data));
                if (data.op === GatewayOpcodes.Dispatch && data.t) {
                    const eventName = GatewayEventsConverter[data.t] || this.parseDiscordEventNames(data.t);
                    const event = this.events.get(eventName);
                    if (!event || eventName === 'ready') return;
                    const args = (GatewayEventArgConverter[eventName] || (d => [d]))(data.d);
                    event(...args);
                }
            });
            const identify = {
                token: _token,
                intents,
                properties: {
                    // @ts-ignore
                    $os: isBrowser() ? Deno.build.os : process.platform,
                    $browser: 'Fuwa.js',
                    $device: 'Fuwa.js',
                },
                // status: this.status,
            };

            // this.debug.log('discord login', 'Attempting to connect to discord');
            this.response.op.emit(GatewayOpcodes.Identify, identify);
        });
        this.op(GatewayOpcodes.Reconnect, () => {
            this.response.op.emit(GatewayOpcodes.Resume, {
                token: _token,
                session_id: this.session.id,
                seq: this.session.seq,
            });
        });
        this.op(GatewayOpcodes.Heartbeat, seq => (this.session.seq = seq));
        this.event('READY', ready => {
            this.bot = new BotUser(ready.user);
            Globs.client = this;
            this.token = _token;
            Globs.appId = this.applicationId = ready.application.id;
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
                // console.log(interaction);
                const cmd = this.commands.get(interaction.data?.id);
                const options = interaction.data.options
                    ? interaction.data.options.filter(
                          c =>
                              ![CommandOptionTypes.SubCommand, CommandOptionTypes.SubCommandGroup].includes(
                                  c.type
                              )
                      )
                    : [];
                const args: [string, CommandOptionTypes][] = options
                    ? options.map(c => [c.name, c.value ?? null])
                    : [];
                await Promise.all(
                    args.map(async (_, i) => {
                        const [__, val] = _;
                        if (!val) return;
                        const converter = ArgumentConverter[options[i].type];
                        args[i][1] = converter ? await converter(val) : val;
                    })
                );
                if (cmd && cmd.run) {
                    cmd.run(new Context(interaction), Object.fromEntries(args));
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

    /**
     * Shuts down the bot process.
     */
    public logout<T extends boolean>(end: T): T extends true ? void : never {
        if (this?.ws && this.loop) {
            clearInterval(this.loop);
            this.ws.close();
        }
        if (end) process.exit();
        return;
    }

    /**
     *
     * @param shardId the shard(s) spawned from websocket
     * @param data discord raw api json
     */
    protected async spawnShard(shardId: number, data: GatewayCommands[GatewayOpcodes.Identify]['d']) {
        this.response.op.emit(GatewayOpcodes.Identify, {
            ...data,
            shard: [shardId, this.shardCount],
        });
        this.debug.log('shards', `Sent shard ${shardId}`);
    }

    public command(
        name: string,
        data: CommandCallback | { desc?: string; args?: Argument[]; guild?: string },
        cb?: CommandCallback
    ) {
        let callback: CommandCallback;
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
        });
        info.args && info.args.forEach(arg => cmd.addArg(arg));
        this.mountingCommands.push(cmd);
        return this;
    }
}
