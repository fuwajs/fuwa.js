import WebSocket from 'ws';
import {
    DiscordAPIEventResponse,
    DiscordAPIOP as DiscordAPIOPResponse,
    DiscordAPIEvents,
    DiscordAPIOP,
} from './_DiscordAPI';
class Emitter {
    protected ws?: WebSocket;
    private OPevents: { [key: number]: (data: unknown) => unknown };
    private APIEvents: { [key: string]: (data: unknown) => unknown };
    private WSEvents: { [key: string]: () => unknown };
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
<<<<<<< HEAD
            ): void => {
                this.ws.send(JSON.stringify({ t, d, op: 0 }));
=======
            ) => {
                this.ws.send(
                    JSON.stringify({
                        t,
                        d,
                        op: 0,
                    })
                );
>>>>>>> parent of 852cbb0... eslint
            },
        },
    };
    connect(url: string): void {
        this.ws = new WebSocket(url);
        this.ws.on('open', () => {
            console.log('Connected');
            this.WSEvents.open();
            this.ws?.on('message', (data) => {
<<<<<<< HEAD
                this.WSEvents.message();
                const res: { op: number; t: string | null; d: unknown } = JSON.parse(
=======
                this.WSEvents.message ? this.WSEvents.message() : 0;
                let res: { op: number; t: string | null; d: any } = JSON.parse(
>>>>>>> parent of 852cbb0... eslint
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
