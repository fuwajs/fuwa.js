/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
/******************************************************************************
 * @file src/lib/_http.ts
 * @fileoverview Provides http functions using undici or fetch() depending on
 * the JavaScript/TypeScript environment.
 *****************************************************************************/
import Debug from './_Debug';
import { discordAPI } from './_DiscordAPI';
export default {
    /**
     * Use this if you want to handle Discord Rate limits automatically.
     * ! Be aware that this function is **recursive**
     * Note: this automatically 'catch'es on rejection
     * @param method The HTTP method to execute
     * @param path The path from 'https://discord.com/api/v{version} to execute
     * the described {@see method} from
     * @param token The bots token (for authorization)
     * @param data The data (if any) to send
     * @param version Discord API version to use {@default v 8}
     */
    REQUEST(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
        path: string,
        token?: string,
        data?: string | Buffer,
        version?: 6 | 8
    ): Promise<any> {
        return new Promise(async (resolve, reject) => {
    },

    GET(path: string, token?: string): Promise<any> {
        return this.REQUEST('GET', path, token);
    },
    DELETE(path: string, token?: string): Promise<any> {
        return this.REQUEST('DELETE', path, token);
    },
    POST(path: string, token: string, data?: string | Buffer): Promise<any> {
        return this.REQUEST('POST', path, token, data);
    },
    PUT(path: string, token: string, data?: string | Buffer): Promise<any> {
        return this.REQUEST('PUT', path, token, data);
    },
    PATCH(path: string, token: string, data?: string | Buffer): Promise<any> {
        return this.REQUEST('PATCH', path, token, data);
    },
};
