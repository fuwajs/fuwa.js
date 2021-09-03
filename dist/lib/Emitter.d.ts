/******************************************************************************
 * @file src/lib/Emitter.ts
 * @fileoverview Exports the emitter class. It is the baseclass for the
 * Client class.
 ******************************************************************************/
import { DiscordAPIOP as DiscordAPIOPResponse, GatewayEvents } from './_DiscordAPI';
export interface QueryOptions {
    v?: number;
    encoding?: 'json' | 'etf';
    compress?: boolean;
}
/**
 * The baseclass for the Client class.
 */
declare class Emitter {
    protected ws?: any;
    private OPevents;
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
    protected connect(url: string, query?: QueryOptions): void;
    protected op<T extends keyof DiscordAPIOPResponse>(op: T, cb: (data: DiscordAPIOPResponse[T]['d']) => void): void;
    protected event<T extends keyof GatewayEvents>(e: T, cb: (data: GatewayEvents[T]['d']) => void): void;
}
export default Emitter;
