/// <reference types="node" />
declare const _default: {
    GET(path: string, token: string): Promise<any>;
    DELETE(path: string, token: string): Promise<any>;
    POST(path: string, token: string, data: string | Buffer): Promise<string>;
    PUT(path: string, token: string, data: any): Promise<string>;
    OTHER(method: string, path: string, token: string, data: any): Promise<any>;
};
export default _default;
