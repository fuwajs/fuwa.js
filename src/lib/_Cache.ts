import { clientOptions } from './Client';
// import Debug from './_Debug';
import { Guild } from './_DiscordAPI';

class Cache {
    data: {
        guilds: Map<string, Guild>;
    };
    constructor(protected options: clientOptions['cachingSettings']) {
        this.data = { guilds: new Map<string, Guild>() };
        if (options.clearAfter !== false) {
            setInterval(() => {
                delete this.data;
                this.data = {
                    guilds: new Map<string, Guild>(),
                };
            }, options.clearAfter);
        }
    }
    cache<T extends keyof typeof Cache.prototype.data>(
        type: T,
        data: any
    ): void {
        if (
            this.options?.cacheOptions[type] === undefined
                ? true
                : this.options.cacheOptions[type]
        ) {
            this.data[type].set(data.id, data);
            // const debug = new Debug(true);
            // debug.log('cache', debug.object(this.data));
        }
    }
}

export default Cache;
