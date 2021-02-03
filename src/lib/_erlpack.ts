/******************************************************************************
 * @file src/lib/_erlpack.ts
 * @fileoverview Provides alternative functions if erlpack is not installed.
 *****************************************************************************/

export let erlpack: {
    pack(data: any): Buffer;
    unpack(data: Buffer): any;
};

try {
    // import() doesnt work for whatever reason
    erlpack = require('erlpack');
    if (!erlpack) erlpack = null;
} catch {
    erlpack = null;
}

export const pack = erlpack ? erlpack.pack : JSON.stringify;
export function unpack(data: string | Buffer, encoding: 'etf' | 'json'): any {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        } catch {
            return {};
        }
    }

    if (Buffer.isBuffer(data)) {
        if (encoding === 'etf') {
            return erlpack.unpack(data);
        } else if (encoding === 'json') {
            return JSON.parse(data.toString());
        }
    }
} 