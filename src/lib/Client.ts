import { WebSocket } from '../lib/structures/index';
import { discordAPI, DiscordAPIOP, GatewayIntents } from '../interfaces/DiscordAPI';
import Command from './structures/handlers/Command';
import Globs, { InvalidToken } from '../util/Global';
import { debug as Debug } from '../util/Debug';
import { EventHandlers } from '../interfaces/EventHandler';
import { GatewayCodes } from '../interfaces';

export interface ClientOptions {
    /**Discord Bot Token */
    token?: string | Buffer;
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
    /**
     * Events you
     */
    eventHandlers?: EventHandlers;
}
export interface Events {
    ready(shardId?: number): any;
    interaction();
    reaction();
    COMMAND_DENIED: () => any;
    COMMAND_SUCCESS: () => any;
    GUILD_JOIN: () => any;
    GUILD_LEAVE: () => any;
    message();
}

export default class Client extends WebSocket {
    /** A Map of fuwa#client events*/ 
    public events = new Map<keyof Events, (...args: any[]) => any>();
    /** A Map of commands */
    public commands = new Map<string, Command>();
    public bot: any | null = null;
    /** The message prefix. */
    public defaultPrefix: string | null;
    /** DiscordAPI GateWay Intents */
    protected intents: (keyof typeof GatewayIntents)[];
    protected readonly token = '';
    public shardCount: number;
    /** Your bot ID */
    public applicationId: string;
    /** Options to pass to the client */
    protected options;
    protected debug: typeof Debug;
    protected loop?: NodeJS.Timeout;
    public eventHandlers: EventHandlers ;
    public constructor(options?: ClientOptions) {
        super();
        Object.assign(this, {
            intents: ['DirectMessages', 'Guilds', 'GuildMessages'],
            ...options,
        });
        if (options) {
            this.applicationId = options.applicationId;
            this.shardCount = options.shards ?? 0;
        }
        this.shardCount = 0;

        if (options.eventHandlers) {
            this.eventHandlers = {
                ...options.eventHandlers,
                ['dispatch requirements']: options.eventHandlers['dispatch requirements'],
            };
        }
    }

    /**
     * @typeParam T The event name
     * @param cb The callback function
     * ```typescript
     * <clint>.on('ready', () => console.log ('Up and ready to go!'));
     * ```
     */
    public on<T extends keyof Events>(event: T, callback: Events[T]) {
        this.events.set(event, callback);
        return this;
    }

    public login(token?: string | Buffer) {
        const _token = this.token || token.toString();
        Globs.token = _token;
        this.connect(discordAPI.gateway, 9);
        this.op(GatewayCodes.Hello, data => {
            // this.debug.log('hello', `Received Hello event and received:\n${this.debug.object(data, 1)}`);
            setInterval(() => this.response.op.emit(GatewayCodes.Heartbeat, 251), data.heartbeat_interval);
            const intents = this.intents.map(intent => GatewayIntents[intent]).reduce((a, b) => a | b);
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

            this.debug.log('discord login', 'Attempting to connect to discord');
            this.response.op.emit(GatewayCodes.Identify, identify);
        });
        this.event('READY', ready => {
            this.bot = ready.user;
            Globs.appId = ready.application.id;
            Globs.sessionId = ready.session_id;
            this.events.has('ready') ? this.events.get('ready')(ready.shard) : void 0;
        });
        this.event('INVALID_SESSION', () => {
            this.debug.error('invalid token', 'Invalid token was passed, throwing a error...');
            throw new InvalidToken('Invalid token');
        });
    }

    /**
     * Shuts down the bot process
     */
    public logout(end = true) {
        if (this?.ws && this.loop) {
            clearInterval(this.loop);
            if (end) process.exit();
        }
    }

    /**
     * TODO remove to commands client plugin when its created.
     * this client will be the core and only deal with interactions (latest discord api)
     */
    public async fetchPrefix(): Promise<string> {
        if (this.defaultPrefix === null) {
            throw new Error(
                'You dont have a default prefix set in the client constructor. fetchPrefix returned undefined.'
            );
        }
        return this.defaultPrefix;
    }

    /**
     *
     * @param shardId the shard(s) spawned from websocket
     * @param data discord raw api json
     */
    protected async spawnShard(shardId: number, data: DiscordAPIOP[GatewayCodes.Identify]['d']) {
        this.response.op.emit(GatewayCodes.Identify, {
            ...data,
            shard: [shardId, this.shardCount],
        });
        this.debug.log('shards', `Sent shard ${shardId}`);
    }
}
