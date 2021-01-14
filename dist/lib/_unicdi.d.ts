/// <reference types="node" />
declare const _default: {
    /**
     * Use this if you want to handle Discord Rate limits automatically.
     * Be aware that this function is **recursive**
     */
    REQUEST(method: 'GET' | 'POST' | 'PUT' | 'DELETE', path: string, token: string, data?: any): Promise<any>;
    GET(path: string, token: string): Promise<any>;
    DELETE(path: string, token: string): Promise<any>;
    POST(path: string, token: string, data: string | Buffer): Promise<string>;
    PUT(path: string, token: string, data: any): Promise<string>;
    OTHER(method: string, path: string, token: string, data: any): Promise<any>;
};
export default _default;
