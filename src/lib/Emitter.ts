import WebSocket from 'ws';
import {
    DiscordAPIEventResponse,
    DiscordAPIOP as DiscordAPIOPResponse,
    DiscordAPIEvents,
    DiscordAPIOP,
} from './_DiscordAPI';
class Emitter {
    protected ws?: WebSocket;
    private OPevents: { [key: number]: (data: any) => any } = {};

    private APIEvents: { [key: string]: (data: any) => any } = {};
    private WSEvents: { [key: string]: () => any };
    response = {
        op: {
            emit: <T extends keyof DiscordAPIOPResponse>(
                op: T,
                d: DiscordAPIOPResponse[T]['d']
            ) => {
                this.ws.send(JSON.stringify({ op, d, t: null, }));
            },
        },
        events: {
            emit: <T extends keyof DiscordAPIEvents>(
                t: T,
                d: DiscordAPIEvents[T]
            ): void => {
                this.ws.send(JSON.stringify({ t, d, op: 0 }));
            },
        },
    };
    connect(url: string): void {
        this.ws = new WebSocket(url);
        this.ws.on('open', () => {
            console.log('Connected');
            this.WSEvents?.open();
            this.ws?.on('message', (data) => {
                console.log('message');
                this.WSEvents?.message();
                const res: { op: number; t: string | null; d: unknown } = JSON.parse(
                    data.toString()
                );
                console.log(res);
                if (res.op === 0) {
                    if (!res.t)
                        throw new Error(
                            `The event is undefined while the OP Code is 0\n ${res.t}\n${res.d}\n${res.op}`
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
    event<T extends keyof DiscordAPIEvents>(
        e: T,
        cb: (data: DiscordAPIEvents[T]['d']) => void
    ): void {
        this.APIEvents[e] = cb;
    }
}
export default Emitter;
