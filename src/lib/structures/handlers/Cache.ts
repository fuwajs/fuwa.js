export interface CacheOverwrites {
    /**
     * @description How many much time (ms) until the item is deleted
     */
    expireAfter: number;
}

export interface Cache {
    /**
     * Cache#get
     * @param key the key used to store/find the data in your cache. Case sensitive.
     * @param fallback The fallback for if the request object was not found.
     * @since 1.0.0
     * @returns Stored Cache.
     */
    get: <T>(key: string, fallback: () => Promise<T>) => Promise<T>;
    /**
     * Cache#set
     * @param key the key used to store/find the data in your cache. Case sensitive.
     * @param data The data you wish to store in the cache. This can be any data type.
     * @since 1.0.0
     * @returns Stored Cache.
     */
    set: (key: string, data: any, overwrites?: CacheOverwrites) => void;
    /**
     * Cache#clear
     * @description Clears your entire cache for that collection.
     */
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
    public constructor(options?: MemoryCacheOptions) {
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
            if (!fallback) {
                throw new Error('Fallback is needed to check the cache');
            }
            return await fallback();
        }
    }
    public set(key: string, data: any) {
        this.store.set(key, data);
    }
    public clear() {
        this.store.clear();
        // console.log('cleared');
    }
}
