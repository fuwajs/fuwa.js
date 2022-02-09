import { Buffer } from "https://deno.land/std@0.85.0/node/buffer.ts";
export let erlpack: {
    pack(data: any): Buffer;
    unpack(data: Buffer): any;
};

try {
    erlpack = require('erlpack');
    if (!erlpack) erlpack = null;
} catch {
    erlpack = null;
}

export const pack = erlpack ? erlpack.pack : JSON.stringify;
export function unpack(data: string | Buffer): any {
    if (typeof data === 'string') {
        try {
            return JSON.parse(data);
        } catch {
            return {};
        }
    }

    if (Buffer.isBuffer(data)) {
        if (erlpack) {
            return erlpack.unpack(data);
        } else {
            return JSON.parse(data.toString());
        }
    }
}
