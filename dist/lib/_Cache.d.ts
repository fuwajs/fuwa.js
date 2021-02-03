/******************************************************************************
 * @file src/lib/_Cache.ts
 * Customizable cache implementation. Reccomened for bots on a high amount of
 * servers
 *****************************************************************************/
import { clientOptions } from './Client';
import { Guild } from './_DiscordAPI';
declare class Cache {
    protected options: clientOptions['cachingSettings'];
    data: {
        guilds: Map<string, Guild>;
    };
    constructor(options: clientOptions['cachingSettings']);
    cache<T extends keyof typeof Cache.prototype.data>(type: T, data: any): void;
}
export default Cache;
