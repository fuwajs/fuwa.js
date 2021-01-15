import { clientOptions } from './Client';
import { Guild } from './_DiscordAPI';
declare class _Cache {
    protected options: clientOptions['cachingSettings'];
    data: {
        guilds: Map<string, Guild>;
    };
    constructor(options: clientOptions['cachingSettings']);
    cache<T extends keyof typeof _Cache.prototype.data>(type: T, data: any): void;
}
export default _Cache;
