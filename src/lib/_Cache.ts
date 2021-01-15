import { clientOptions } from './Client';
import { Guild } from './_DiscordAPI';
class _Cache {
    data = {
        guilds: new Map<string, Guild>()
    };
    constructor(protected options: clientOptions['cachingSettings']) {
        if(options.clearAfter !== false) {
            setInterval(() => {
                delete this.data;
                this.data = {
                    guilds: new Map()
                };
            }, options.clearAfter);
        }
    }
    cache<T extends keyof typeof _Cache.prototype.data>(type: T, data: any) {
        if(
            this.options?.cacheOptions[type] === undefined 
            ? true 
            : this.options.cacheOptions[type]
        ) this.data[type].set(data.id, data);
    }

}
export default _Cache;