/// <reference types="node" />
declare const _default: {
    GET(path: string, token: string): Promise<any>;
    DELETE(path: string, token: string): Promise<any>;
    POST(path: string, token: string, data: string | Buffer): Promise<any>;
    PUT(path: string, token: string, data: any): Promise<any>;
    OTHER(method: string, path: string, token: string, data: any): Promise<any>;
};
export default _default;
