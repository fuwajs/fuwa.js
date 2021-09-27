import { WebSocket } from '../lib/structures/index';
import { discordAPI, GatewayCodes, GatewayIntents } from '../util/DiscordAPI';
import Command from './structures/handlers/Command';
import Globs from '../util/Global';

export interface ClientOptions {
    token?: string | Buffer;
    intents?: (keyof typeof GatewayIntents)[];
}
export interface Events {
    ready(shardId?: number): any;
}

export default class Client extends WebSocket {
    public events = new Map<keyof Events, (...args: any[]) => any>();
    public commands = new Map<string, Command>();
    public bot: any | null = null;
    protected intents: (keyof typeof GatewayIntents)[];
    protected token = '';
    public constructor(options?: ClientOptions) {
        super();
        Object.assign(this, {
            intents: ['DirectMessages', 'Guilds', 'GuildMessages'],
            ...options,
        });
    }

    public on<T extends keyof Events>(event: T, callback: Events[T]) {
        this.events.set(event, callback);
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

            // this.debug.log('discord login', 'Attempting to connect to discord');
            this.response.op.emit(GatewayCodes.Identify, identify);
        });
        this.event('READY', ready => {
            this.bot = ready.user;
            Globs.appId = ready.application.id;
            Globs.sessionId = ready.session_id;
            this.events.has('ready') ? this.events.get('ready')(ready.shard) : void 0;
        });
    }
}
