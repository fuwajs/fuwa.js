import { GatewayOpcodes } from '../../../interfaces';
import { GatewayCommands, GatewayEvents } from '../../../interfaces/DiscordAPI';
import { erlpack, pack, unpack } from './Pack';
import { isBrowser } from '../../../util';
// @ts-ignore
const Socket = isBrowser() ? window.WebSocket : require('ws');

export class WebSocket {
    public ws: any;
    private OPevents: { [key: number]: (data: any) => any } = {};
    protected connected = false;
    private APIEvents: { [key: string]: (data: any) => any } = {};
    private WSEvents: { [key: string]: (data?: any) => any } = {};
    protected response = {
        op: {
            emit: <T extends keyof GatewayCommands>(op: T, d: GatewayCommands[T]['d']): void => {
                //this.ws.send(JSON.stringify({ op, d, t: null, }));
                this.ws?.send(pack({ op, d, t: null }));
            },
        },
        events: {
            emit: <T extends keyof GatewayEvents>(t: T, d: GatewayEvents[T]): void => {
                // this.ws.send(JSON.stringify({ t, d, op: 0 }));
                this.ws.send(pack({ t, d, op: GatewayOpcodes.Dispatch }));
            },
        },
    };
    /**
     * ws connection
     * @param url websocket url to connect to
     * @param version api version to connect to
     */
    protected connect(url: string, version: 6 | 8 | 9): void {
        const encoding = erlpack ? 'etf' : 'json';
        if (!erlpack && encoding === 'etf') {
            throw new Error('ETF encoding selected but erlpack not found');
        }
        this.ws = new Socket(url + `?v=${version ?? 8}&encoding=${encoding}`);

        this.ws.onopen = () => {
            this.connected = true;

            this.WSEvents.open && this.WSEvents.open();
            this.ws.onmessage = ({ data }) => {
                const res: {
                    op: GatewayOpcodes;
                    t: keyof GatewayEvents | null;
                    d: unknown;
                    s: number;
                } = unpack(data as any);

                // logs all ws information.
                // console.log(res);

                this.WSEvents.message && this.WSEvents.message(res);
                if (res.op === GatewayOpcodes.Dispatch) {
                    if (!res.t) throw new Error(`The event is undefined while the OP Code is 0\n ${res}`);
                    if (this.APIEvents[res.t]) this.APIEvents[res.t](res.d);
                } else if (this.OPevents[res.op]) this.OPevents[res.op](res.d);
            };
        };
    }
    protected op<T extends keyof GatewayCommands>(op: T, cb: (data: GatewayCommands[T]['d']) => void): void {
        this.OPevents[op] = cb;
    }
    protected event<T extends keyof GatewayEvents>(e: T, cb: (data: GatewayEvents[T]['d']) => void): void {
        this.APIEvents[e] = cb;
    }
    protected wsEvent<T extends 'open' | 'message'>(e: T, cb: (data: any) => any) {
        this.WSEvents[e] = cb;
    }
}
