/// <reference types="node" />
import { WebSocket } from '../lib/structures/index';
import { DiscordAPIOP, GatewayIntents } from '../interfaces/DiscordAPI';
import Command from './structures/handlers/Command';
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
    interaction(): any;
    reaction(): any;
    COMMAND_DENIED: () => any;
    COMMAND_SUCCESS: () => any;
    GUILD_JOIN: () => any;
    GUILD_LEAVE: () => any;
    message(): any;
}
export default class Client extends WebSocket {
    events: Map<keyof Events, (...args: any[]) => any>;
    commands: Map<string, Command>;
    bot: any | null;
    defaultPrefix: string | null;
    protected intents: (keyof typeof GatewayIntents)[];
    protected readonly token = "";
    shardCount: number;
    applicationId: string;
    protected options: any;
    protected debug: typeof Debug;
    protected loop?: NodeJS.Timeout;
    eventHandlers: EventHandlers;
    constructor(options?: ClientOptions);
    /**
     * @typeParam T The event name
     * @param cb The callback function
     * ```typescript
     * <clint>.on('ready', () => console.log ('Up and ready to go!'));
     * ```
     */
    on<T extends keyof Events>(event: T, callback: Events[T]): this;
    login(token?: string | Buffer): void;
    /**
     * Shuts down the bot process
     */
    logout(end?: boolean): void;
    /**
     * TODO remove to commands client plugin when its created.
     * this client will be the core and only deal with interactions (latest discord api)
     */
    fetchPrefix(): Promise<string>;
    /**
     *
     * @param shardId the shard(s) spawned from websocket
     * @param data discord raw api json
     */
    protected spawnShard(shardId: number, data: DiscordAPIOP[GatewayCodes.Identify]['d']): Promise<void>;
}
//# sourceMappingURL=Client.d.ts.map