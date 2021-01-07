import WebSocket from 'ws';
import { DiscordAPIOP as DiscordAPIOPResponse, DiscordAPIEvents } from './_Const';
declare class Emitter {
    protected ws?: WebSocket;
    private OPevents;
    private APIEvents;
    private WSEvents;
    response: {
        op: {
            emit: <T extends 1 | 2 | 3 | 4 | 6 | 8 | 9 | 10>(op: T, data: DiscordAPIOPResponse[T]) => void;
        };
        events: {
            emit: <T_1 extends "GUILD_CREATE" | "READY" | "CHANNEL_CREATE">(e: T_1, data: DiscordAPIEvents[T_1]) => void;
        };
    };
    connect(url: string): void;
    op<T extends keyof DiscordAPIOPResponse>(op: T, cb: (data: DiscordAPIOPResponse[T]) => any): void;
    event<T extends keyof DiscordAPIEvents>(e: T, cb: (data: DiscordAPIEvents[T]) => any): void;
}
export default Emitter;
