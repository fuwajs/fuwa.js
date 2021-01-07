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
                data: DiscordAPIOPResponse[T]
            ) => {
                data.op = op;
                if (
                    this.ws?.OPEN &&
                    !this.ws.CLOSED &&
                    !this.ws.CLOSING &&
                    !this.ws.CONNECTING
                )
                    this.ws.send(JSON.stringify(data));
            },
        },
        events: {
            emit: <T extends keyof DiscordAPIEvents>(
                e: T,
                data: DiscordAPIEvents[T]
            ) => {
                data.t = e;
                if (
                    this.ws?.OPEN &&
                    !this.ws.CLOSED &&
                    !this.ws.CLOSING &&
                    !this.ws.CONNECTING
                )
                    this.ws.send(JSON.stringify(data));
            },
        },
    };
    connect(url: string) {
        this.ws = new WebSocket(url);
        this.ws.on('open', () => {
            this.WSEvents.open ? this.WSEvents.open() : 0;
            this.ws?.on('message', (data) => {
                this.WSEvents.message ? this.WSEvents.message() : 0;
                let res: { op: number; t: string | null; d: any } = JSON.parse(
                    data.toString()
                );
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
        cb: (data: DiscordAPIOPResponse[T]) => any
    ) {
        this.OPevents[op] = cb;
    }
    event<T extends keyof DiscordAPIEvents>(
        e: T,
        cb: (data: DiscordAPIEvents[T]) => any
    ) {
        this.APIEvents[e] = cb;
    }
}
export default Emitter;
