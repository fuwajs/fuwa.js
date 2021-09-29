/// <reference types="node" />
export declare let erlpack: {
    pack(data: any): Buffer;
    unpack(data: Buffer): any;
};
export declare const pack: ((data: any) => Buffer) | {
    (value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    (value: any, replacer?: (string | number)[], space?: string | number): string;
};
export declare function unpack(data: string | Buffer): any;
//# sourceMappingURL=Pack.d.ts.map