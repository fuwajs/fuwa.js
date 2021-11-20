export interface CacheOverwrites {
    /**
     * How many much time (ms) until the item is deleted
     */
    expireAfter: number;
}

export interface Cache {
    get: <T>(key: string, fallback: () => Promise<T>) => Promise<T>;
    set: (key: string, data: any, overwrites?: CacheOverwrites) => void;
    clear: () => void;
}

export interface MemoryCacheOptions {
    expireAfter?: number;
    maxSize?: number;
}
const SIZE_CHECK_SPEED = 100;
export class MemoryCache implements Cache {
    protected expireAfter = 10; //900_000; // 15 minutes
    protected maxSize = 100_000;
    protected store = new Map();
    constructor(options?: MemoryCacheOptions) {
        Object.assign(this, options ?? {});
        setInterval(() => this.clear, this.expireAfter);
        // clear if the cache gets too big
        setInterval(() => {
            if (this.store.size > this.maxSize) {
                this.clear();
            }
        }, SIZE_CHECK_SPEED);
    }
    public async get<T>(key: string, fallback: () => Promise<T>): Promise<T> {
        if (this.store.has(key)) {
            return this.store.get(key);
        } else {
            return await fallback();
        }
    }
    set(key: string, data: any) {
        this.store.set(key, data);
    }
    clear() {
        this.store.clear();
        console.log('cleared');
    }
}
