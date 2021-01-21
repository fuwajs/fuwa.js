/// <reference types="node" />
declare const _default: {
    /**
     * Use this if you want to handle Discord Rate limits automatically.
     * ! Be aware that this function is **recursive**
     * Note: this automatically 'catch'es on rejection
     * TODO: Customizable API version (v8 by default as of now)
     * @param method The HTTP method
     * @param path The path from 'https://discord.com/api/v8 to {method} from/on.
     * @param token The bots token (for authorization)
     * @param data The data (if any) to send
     */
    REQUEST(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', path: string, token?: string, data?: string | Buffer): Promise<any>;
    GET(path: string, token?: string): Promise<any>;
    DELETE(path: string, token?: string): Promise<any>;
    POST(path: string, token: string, data?: string | Buffer): Promise<any>;
    PUT(path: string, token: string, data?: string | Buffer): Promise<any>;
    PATCH(path: string, token: string, data?: string | Buffer): Promise<any>;
};
export default _default;
