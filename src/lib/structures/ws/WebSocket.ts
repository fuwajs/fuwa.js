import { WebSocket as Socket } from 'ws';

import { DiscordAPIOP as DiscordAPIOPResponse, GatewayEvents, GatewayCodes } from '../../../util/DiscordAPI';
import { erlpack, pack, unpack } from './Pack';

export class WebSocket {
    public ws: Socket;
    private OPevents: { [key: number]: (data: any) => any } = {};
    protected connected = false;
    private APIEvents: { [key: string]: (data: any) => any } = {};
    private WSEvents: { [key: string]: () => any };
    protected response = {
        op: {
            emit: <T extends keyof DiscordAPIOPResponse>(op: T, d: DiscordAPIOPResponse[T]['d']): void => {
                //this.ws.send(JSON.stringify({ op, d, t: null, }));
                this.ws?.send(pack({ op, d, t: null }));
            },
        },
        events: {
            emit: <T extends keyof GatewayEvents>(t: T, d: GatewayEvents[T]): void => {
                // this.ws.send(JSON.stringify({ t, d, op: 0 }));
                this.ws.send(pack({ t, d, op: GatewayCodes.Dispatch }));
            },
        },
    };
    protected connect(url: string, version: 6 | 8 | 9): void {
        const encoding = erlpack ? 'etf' : 'json';
        if (!erlpack && encoding === 'etf') {
            throw new Error('ETF encoding selected but erlpack not found');
        }
        this.ws = new Socket(url + `?v=${version ?? 8}&encoding=${encoding}`);
        this.ws.onopen = () => {
            this.connected = true;
            this.WSEvents?.open();
            this.ws.onmessage = ({ data }) => {
                const res: {
                    op: GatewayCodes;
                    t: keyof GatewayEvents | null;
                    d: unknown;
                    s: number;
                } = unpack(data as any);

                // ws information
                console.log(res);

                this.WSEvents?.message();
                if (res.op === GatewayCodes.Dispatch) {
                    if (!res.t) throw new Error(`The event is undefined while the OP Code is 0\n ${res}`);
                    if (this.APIEvents[res.t]) this.APIEvents[res.t](res.d);
                } else if (this.OPevents[res.op]) this.OPevents[res.op](res.d);
            };
        };
    }
    protected op<T extends keyof DiscordAPIOPResponse>(
        op: T,
        cb: (data: DiscordAPIOPResponse[T]['d']) => void
    ): void {
        this.OPevents[op] = cb;
    }
    protected event<T extends keyof GatewayEvents>(e: T, cb: (data: GatewayEvents[T]['d']) => void): void {
        this.APIEvents[e] = cb;
    }
}
