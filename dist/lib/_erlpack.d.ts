/// <reference types="node" />
export declare let erlpack: {
    pack(data: any): Buffer;
    unpack(data: Buffer): any;
};
export declare const pack: {
    (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    (value: any, replacer?: (string | number)[], space?: string | number): string;
} | ((data: any) => Buffer);
export declare function unpack(data: string | Buffer, encoding: 'etf' | 'json'): any;
