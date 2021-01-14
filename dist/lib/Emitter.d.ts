import WebSocket from 'ws';
import { DiscordAPIOP as DiscordAPIOPResponse, DiscordAPIEvents } from './_DiscordAPI';
declare class Emitter {
    protected ws?: WebSocket;
    private OPevents;
    private APIEvents;
    private WSEvents;
    protected response: {
        op: {
            emit: <T extends 1 | 2 | 3 | 4 | 6 | 8 | 9 | 10>(op: T, d: DiscordAPIOPResponse[T]["d"]) => void;
        };
        events: {
            emit: <T_1 extends "GUILD_CREATE" | "READY" | "CHANNEL_CREATE" | "MESSAGE_CREATE">(t: T_1, d: DiscordAPIEvents[T_1]) => void;
        };
    };
    protected connect(url: string, query?: {
        v?: number;
        encoding?: 'json' | 'etf';
        compress?: boolean;
    }): void;
    protected op<T extends keyof DiscordAPIOPResponse>(op: T, cb: (data: DiscordAPIOPResponse[T]['d']) => void): void;
    protected event<T extends keyof DiscordAPIEvents>(e: T, cb: (data: DiscordAPIEvents[T]['d']) => void): void;
}
export default Emitter;
