import WebSocket from 'util/WebSocket';
import { discordAPI, GatewayCodes, GatewayIntents } from 'util/DiscordAPI';
import Command from './Command';
export interface Events {
    ready(shardId: number): any;
}

export default class Client extends WebSocket {
    public events = new Map<keyof Events, Function>();
    public commands = new Map<string, Command>();
    constructor() {
        super();
    }

    on<T extends keyof Events>(event: T, callback: Events[T]) {
        this.events.set(event, callback);
    }

    login(token: string | Buffer) {
        const _token = token.toString();

        this.connect(discordAPI.gateway, 9);
        this.op(GatewayCodes.Hello, data => {
            // this.debug.log('hello', `Recieved Hello event and recieved:\n${this.debug.object(data, 1)}`);
            setInterval(() => this.response.op.emit(GatewayCodes.Heartbeat, 251), data.heartbeat_interval);
            const identify = {
                token: token.toString(),
                intents: GatewayIntents.Guilds | GatewayIntents.GuildMessages | GatewayIntents.DirectMessages,
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
        this.event('READY', r => {
            this.events.get('ready')();
        });
    }
}
