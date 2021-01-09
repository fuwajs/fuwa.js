import WebSocket from 'ws';
import { DiscordAPIOP as DiscordAPIOPResponse, DiscordAPIEvents } from './_DiscordAPI';
declare class Emitter {
    protected ws?: WebSocket;
    private OPevents;
    private APIEvents;
    private WSEvents;
    response: {
        op: {
            emit: <T extends 1 | 2 | 3 | 4 | 6 | 8 | 9 | 10>(op: T, d: DiscordAPIOPResponse[T]["d"]) => void;
        };
        events: {
            emit: <T_1 extends "guildCreate" | "ready" | "channelCreate" | "messageCreate">(t: T_1, d: DiscordAPIEvents[T_1]) => void;
        };
    };
    connect(url: string): void;
    protected op<T extends keyof DiscordAPIOPResponse>(op: T, cb: (data: DiscordAPIOPResponse[T]['d']) => void): void;
    event<T extends keyof DiscordAPIEvents>(e: T, cb: (data: DiscordAPIEvents[T]['d']) => void): void;
}
export default Emitter;
