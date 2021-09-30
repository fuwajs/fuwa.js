export class Collection<K, V> extends Map<K, V> {
    maxSize?: number;
    private sweeper?: CollectionSweeper<K, V> & { intervalId?: any };

    public constructor(
        entries?: (readonly (readonly [K, V])[] | null) | Map<K, V>,
        options?: CollectionOptions<K, V>
    ) {
        super(entries ?? []);

        this.maxSize = options?.maxSize;
        if (!options?.sweeper) return;

        this.startSweeper(options.sweeper);
    }

    public startSweeper(options: CollectionSweeper<K, V>): number {
        if (this.sweeper?.intervalId) clearInterval(this.sweeper.intervalId);

        this.sweeper = options;
        this.sweeper.intervalId = setInterval(() => {
            this.map(async (value, key) => {
                if (!(await this.sweeper?.filter(value, key))) return;

                this.delete(key);
                return key;
            });
        }, options.interval);

        return this.sweeper.intervalId!;
    }

    public stopSweeper(): void {
        return clearInterval(this.sweeper?.intervalId);
    }

    public changeSweeperInterval(newInterval: number) {
        if (!this.sweeper) return;

        this.startSweeper({ filter: this.sweeper.filter, interval: newInterval });
    }

    public changeSweeperFilter(newFilter: (value: V, key: K) => boolean | Promise<boolean>) {
        if (!this.sweeper) return;

        this.startSweeper({ filter: newFilter, interval: this.sweeper.interval });
    }

    public set(key: K, value: V) {
        // When this collection is maxSizeed make sure we can add first
        if ((this.maxSize || this.maxSize === 0) && this.size >= this.maxSize) {
            return this;
        }

        return super.set(key, value);
    }

    public array() {
        return [...this.values()];
    }

    /** Retrieve the value of the first element in this collection */
    public first(): V | undefined {
        return this.values().next().value;
    }

    public last(): V | undefined {
        return [...this.values()][this.size - 1];
    }

    public random(): V | undefined {
        const array = [...this.values()];
        return array[Math.floor(Math.random() * array.length)];
    }

    public find(callback: (value: V, key: K) => boolean) {
        for (const key of this.keys()) {
            const value = this.get(key)!;
            if (callback(value, key)) return value;
        }
        // If nothing matched
        return;
    }

    public filter(callback: (value: V, key: K) => boolean) {
        const relevant = new Collection<K, V>();
        this.forEach((value, key) => {
            if (callback(value, key)) relevant.set(key, value);
        });

        return relevant;
    }

    public map<T>(callback: (value: V, key: K) => T) {
        const results = [];
        for (const key of this.keys()) {
            const value = this.get(key)!;
            results.push(callback(value, key));
        }
        return results;
    }

    public some(callback: (value: V, key: K) => boolean) {
        for (const key of this.keys()) {
            const value = this.get(key)!;
            if (callback(value, key)) return true;
        }

        return false;
    }

    public every(callback: (value: V, key: K) => boolean) {
        for (const key of this.keys()) {
            const value = this.get(key)!;
            if (!callback(value, key)) return false;
        }

        return true;
    }

    public reduce<T>(callback: (accumulator: T, value: V, key: K) => T, initialValue?: T): T {
        let accumulator: T = initialValue!;

        for (const key of this.keys()) {
            const value = this.get(key)!;
            accumulator = callback(accumulator, value, key);
        }

        return accumulator;
    }
}

interface CollectionOptions<K, V> {
    sweeper?: CollectionSweeper<K, V>;
    maxSize?: number;
}

interface CollectionSweeper<K, V> {
    /** The filter to determine whether an element should be deleted or not */
    filter: (value: V, key: K) => boolean | Promise<boolean>;
    /** The interval in which the sweeper should run */
    interval: number;
}
