import { WebSocket as Socket } from 'ws';
import { DiscordAPIOP as DiscordAPIOPResponse, GatewayEvents } from '../../../interfaces/DiscordAPI';
export declare class WebSocket {
    ws: Socket;
    private OPevents;
    protected connected: boolean;
    private APIEvents;
    private WSEvents;
    protected response: {
        op: {
            emit: <T extends keyof DiscordAPIOPResponse>(op: T, d: DiscordAPIOPResponse[T]["d"]) => void;
        };
        events: {
            emit: <T_1 extends keyof GatewayEvents>(t: T_1, d: GatewayEvents[T_1]) => void;
        };
    };
    /**
     * ws connection
     * @param url websocket url to connect to
     * @param version api version to connect to
     */
    protected connect(url: string, version: 6 | 8 | 9): void;
    protected op<T extends keyof DiscordAPIOPResponse>(op: T, cb: (data: DiscordAPIOPResponse[T]['d']) => void): void;
    protected event<T extends keyof GatewayEvents>(e: T, cb: (data: GatewayEvents[T]['d']) => void): void;
}
//# sourceMappingURL=WebSocket.d.ts.map