import WebSocket from 'ws';
import {
    DiscordAPIOP as DiscordAPIOPResponse,
    DiscordAPIEvents,
    opCodes,
} from './_DiscordAPI';

import { erlpack, pack, unpack } from './_erlpack'

class Emitter {
    protected ws?: WebSocket;
    private OPevents: { [key: number]: (data: any) => any } = {};

    private APIEvents: { [key: string]: (data: any) => any } = {};
    private WSEvents: { [key: string]: () => any };
    protected response = {
        op: {
            emit: <T extends keyof DiscordAPIOPResponse>(
                op: T,
                d: DiscordAPIOPResponse[T]['d']
            ): void => {
                //this.ws.send(JSON.stringify({ op, d, t: null, }));
                this.ws?.send(pack({ op, d, t: null }));
            },
        },
        events: {
            emit: <T extends keyof DiscordAPIEvents>(
                t: T,
                d: DiscordAPIEvents[T]
            ): void => {
                // this.ws.send(JSON.stringify({ t, d, op: 0 }));
                this.ws.send(pack({ t, d, op: opCodes.dispatch }));
            },
        },
    };
    protected connect(url: string, query?: {
        v?: number,
        encoding?: 'json' | 'etf',
        compress?: boolean,
    }): void {
        
        const encoding = query?.encoding || (erlpack ? 'etf' : 'json');
        if (!erlpack && encoding === 'etf') {
            throw new Error('ETF encoding selected but erlpack not found');
        }
        this.ws = new WebSocket(url + `?v=${query.v || 8}&encoding=${encoding}`);
        this.ws.on('open', () => {
            console.log('Connected');
            this.WSEvents?.open();
            this.ws?.on('message', (data: Buffer) => {
                const res: { op: opCodes; t: string | null; d: unknown } = unpack(data, encoding);
                this.WSEvents?.message();
                if (res.op === opCodes.dispatch) {
                    if (!res.t)
                        throw new Error(
                            `The event is undefined while the OP Code is 0\n ${res}`
                        );
                    if (this.APIEvents[res.t]) this.APIEvents[res.t](res.d);
                } else if (this.OPevents[res.op]) this.OPevents[res.op](res.d);
            });
        });
    }
    protected op<T extends keyof DiscordAPIOPResponse>(
        op: T,
        cb: (data: DiscordAPIOPResponse[T]['d']) => void
    ): void {
        this.OPevents[op] = cb;
    }
    protected event<T extends keyof DiscordAPIEvents>(
        e: T,
        cb: (data: DiscordAPIEvents[T]['d']) => void
    ): void {
        this.APIEvents[e] = cb;
    }
}
export default Emitter;
