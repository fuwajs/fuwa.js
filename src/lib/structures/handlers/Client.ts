import { WebSocket } from '../ws/WebSocket';
import { discordAPI, GatewayCommands, GatewayIntents } from '../../../interfaces/DiscordAPI';
import { Command } from './Command';
import Globs, { InvalidToken } from '../../../util/Global';
import { HttpErrorChecker } from '../../../util';
import { debug as Debug } from '../../../util/Debug';
import {
    EventHandlers,
    GatewayEventsConverter,
    GatewayEventArgConverter,
} from '../../../interfaces/EventHandler';
import { GatewayOpcodes, ApplicationCommand } from '../../../interfaces';
import http from '../ws/http';
import { Plugin } from './Plugin';
import { Guild } from '../../discord/Guild';
import { User } from '../../discord/User';
import { Channel } from '../../discord/Channel';

export interface ClientOptions {
    /** Discord Bot Token */
    token?: string | Buffer;
    /** An array of all fuwa.js#plugins assigned to the client class. */
    plugins: Plugin[];
    /**
     * @description Discord Intends, enabling bot functions with our api.
     * @see https://discord.com/developers/docs/topics/gateway#gateway-intents
     */
    intents?: (keyof typeof GatewayIntents | GatewayIntents)[];
    /**
     * The owner(s) discord ID. These users can bypass default bot permissions.
     */
    owners?: string[] | string;
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
    protected plugins: Plugin[];
    public bot: any | null = null;
    /** The message prefix. */
    public defaultPrefix: string | null;
    public shardCount: number;
    /** Your bot ID */
    public applicationId: string;
    protected sessionId = '';
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
            this.applicationId = options.applicationId;
            this.shardCount = options.shards ?? 0;
            this.token = options.token ? options.token.toString() : '';
        }
        this.shardCount = 0;
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
    /** Something about this... */
    public mountCommand(cmd: Command) {
        if (!this.applicationId) throw new Error('Application Id is required to do this action');
        let path = `/applications/${this.applicationId}`;
        if (cmd.guild) {
            path += `/guilds/${cmd.guild}/commands`;
        } else {
            path += '/commands';
        }
        http.POST(path, JSON.stringify({ name: cmd.name, description: cmd.description })).then(command => {
            this.commands.set(command.id, cmd);
        });
        return this;
    }
    public getGuild(gid: string): Promise<Guild | null> {
        return http
            .GET(`/guilds/${gid}`)
            .catch(() => Promise.resolve(null))
            .then(HttpErrorChecker)
            .then(res => (res ? new Guild(res) : null));
    }
    public getUser(uid: string): Promise<User | null> {
        return http
            .GET(`/users/${uid}`)
            .catch(() => Promise.resolve(null))
            .then(HttpErrorChecker)
            .then(res => (res ? new User(res) : null));
    }
    public getChannel(cid: string): Promise<Channel | null> {
        return http
            .GET(`/channels/${cid}`)
            .catch(() => Promise.resolve(null))
            .then(HttpErrorChecker)
            .then(res => (res ? new Channel(res) : null));
    }
    /**
     * Returns all mounted commands.
     * @param guildId the id of the guild your application command is registierd in.
     */
    public getMountedCommands(guildId?: string): Promise<ApplicationCommand[]> {
        let path = `/applications/${this.applicationId}`;
        if (guildId) {
            path += `/guilds/${guildId}/commands`;
        } else {
            path += '/commands';
        }
        return http.GET(path);
    }
    /**
     *
     * @param cmd command or command id
     * @param guildId only needed if your command is a guild command and your id is a string
     */
    public unmountCommand(cmd: Command | string, guildId?: string) {
        if (!this.applicationId) throw new Error('Application Id is required to do this action');
        const guild: string | null = typeof cmd === 'string' ? guildId || null : cmd.guild || null;
        const cmdId = typeof cmd === 'string' ? cmd : cmd.id;
        let path = `/applications/${this.applicationId}`;
        if (!guild) {
            path += `/guilds/${guild}/commands`;
        } else {
            path += '/commands';
        }
        return http.DELETE(path + `/${cmdId}`);
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
            setInterval(() => this.response.op.emit(GatewayOpcodes.Heartbeat, 251), data.heartbeat_interval);
            const intents = this.intents.map(intent => GatewayIntents[intent]).reduce((a, b) => a | b);
            this.wsEvent('message', data => {
                this.plugins.forEach(plugin => plugin.event(this, data));
                if (data.op === GatewayOpcodes.Dispatch && data.t) {
                    const eventName = GatewayEventsConverter[data.t] || this.parseDiscordEventNames(data.t);
                    const event = this.events.get(eventName);
                    if (!event) return;
                    const args = (GatewayEventArgConverter[eventName] || (d => [d]))(data.d);
                    event(...args);
                }
            });
            const identify = {
                token: _token,
                intents,
                properties: {
                    $os: process.platform,
                    $browser: 'Fuwa.js',
                    $device: 'Fuwa.js',
                },
                // status: this.status,
            };

            // this.debug.log('discord login', 'Attempting to connect to discord');
            this.response.op.emit(GatewayOpcodes.Identify, identify);
        });
        this.event('READY', ready => {
            this.bot = ready.user;
            Globs.appId = this.applicationId = ready.application.id;

            Globs.sessionId = this.sessionId = ready.session_id;
            this.events.has('guild loaded')
                ? ready.guilds.forEach(g => this.events.get('guild loaded')(g))
                : void 0;
        });
        // this.event('GUILD_CREATE', guild => {});

        this.event('INVALID_SESSION', () => {
            this.debug.error('invalid token', 'Invalid token was passed, throwing a error...');
            throw new InvalidToken('Invalid token');
        });
    }

    /**
     * Shuts down the bot process.
     */
    public logout(end = true): void | never {
        if (this?.ws && this.loop) {
            clearInterval(this.loop);
            this.ws.close();
        }
        if (end) process.exit();
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
}
