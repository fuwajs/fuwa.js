import WebSocket from 'ws';
import {
    DiscordAPIEventRespone,
    DiscordAPIOP as DiscordAPIOPResponse,
    DiscordAPIEvents,
    DiscordAPIOP,
} from './_Const';
class Emitter {
    protected ws?: WebSocket;
    private OPevents: { [key: number]: (data: any) => any } = {};
    private APIEvents: { [key: string]: (data: any) => any } = {};
    private WSEvents: { [key: string]: () => any } = {};
    response = {
        op: {
            emit: <T extends keyof DiscordAPIOPResponse>(
                op: T,
                d: DiscordAPIOPResponse[T]['d']
            ) => {
                this.ws.send(
                    JSON.stringify({
                        op,
                        d,
                        t: null,
                    })
                );
            },
        },
        events: {
            emit: <T extends keyof DiscordAPIEvents>(
                t: T,
                d: DiscordAPIEvents[T]
            ) => {
                this.ws.send(
                    JSON.stringify({
                        t,
                        d,
                        op: 0,
                    })
                );
            },
        },
    };
    connect(url: string) {
        this.ws = new WebSocket(url);
        this.ws.on('open', () => {
            console.log('Connected');
            this.WSEvents.open ? this.WSEvents.open() : 0;
            this.ws?.on('message', (data) => {
                this.WSEvents.message ? this.WSEvents.message() : 0;
                let res: { op: number; t: string | null; d: any } = JSON.parse(
                    data.toString()
                );
                console.log(res);
                if (res.op === 0) {
                    if (!res.t)
                        throw new Error(
                            `The event is undefined while the OP Code is 0\n ${res.t}\n${res.d}\n${res.op}`
                        );
                    this.APIEvents[res.t] ? this.APIEvents[res.t](res.d) : 0;
                } else this.OPevents[res.op] ? this.OPevents[res.op](res.d) : 0;
            });
        });
    }
    op<T extends keyof DiscordAPIOPResponse>(
        op: T,
        cb: (data: DiscordAPIOPResponse[T]['d']) => any
    ) {
        this.OPevents[op] = cb;
    }
    event<T extends keyof DiscordAPIEvents>(
        e: T,
        cb: (data: DiscordAPIEvents[T]['d']) => any
    ) {
        this.APIEvents[e] = cb;
    }
}
export default Emitter;
