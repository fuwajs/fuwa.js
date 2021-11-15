export interface CacheOverwrites {
    /**
     * How many much time (ms) until the item is deleted
     */
    expireAfter: number;
}

export interface Cache {
    get: <T>(key: string, fallback: () => T) => T;
    set: (key: string, data: any, overwrites?: CacheOverwrites) => void;
    clear: () => void;
}

export interface MemoryCacheOptions {
    expireAfter?: number;
    maxSize?: number;
}
const SIZE_CHECK_SPEED = 100;
export class MemoryCache implements Cache {
    protected expireAfter = 900_000; // 15 minutes
    protected maxSize = 100_000;
    protected store = new Map();
    constructor(options?: MemoryCacheOptions) {
        Object.assign(this, options ?? {});
        setInterval(this.clear, this.expireAfter);
        // clear if the cache gets too big
        setInterval(() => {
            if (this.store.size > this.maxSize) {
                this.clear();
            }
        }, SIZE_CHECK_SPEED);
    }
    public get<T>(key: string, fallback: () => T) {
        console.log(this.store);
        if (this.store.has(key)) {
            return this.store.get(key);
        } else {
            return fallback();
        }
    }
    set(key: string, data: any, overwrites?: CacheOverwrites) {
        console.log(this.store);
        this.store.set(key, data);
    }
    clear() {
        this.store.clear();
    }
}
