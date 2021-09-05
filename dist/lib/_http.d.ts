 
/******************************************************************************
 * @file src/lib/_http.ts
 * @fileoverview Provides http functions using undici or fetch() depending on
 * the JavaScript/TypeScript environment.
 *****************************************************************************/
/// <reference types="node" />
declare const _default: {
    /**
     * Use this if you want to handle Discord Rate limits automatically.
     * ! Be aware that this function is **recursive**
     * Note: this automatically 'catch'es on rejection
     * @param method The HTTP method to execute
     * @param path The path from 'https://discord.com/api/v{version} to execute
     * the described {@see method} from
     * @param data The data (if any) to send
     * @param version Discord API version to use {@default v 8}
     */
    REQUEST(method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH', path: string, data?: string | Buffer, headers?: any): Promise<any>;
    GET(path: string, headers?: any): Promise<any>;
    DELETE(path: string, headers?: any): Promise<any>;
    POST(path: string, data?: string | Buffer, headers?: any): Promise<any>;
    PUT(path: string, data?: string | Buffer, headers?: any): Promise<any>;
    PATCH(path: string, data?: string | Buffer, headers?: any): Promise<any>;
};
export default _default;
