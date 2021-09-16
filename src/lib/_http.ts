/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
/******************************************************************************
 * @file src/lib/_http.ts
 * @fileoverview Provides http functions using undici or fetch() depending on
 * the JavaScript/TypeScript environment.
 *****************************************************************************/

import { Client } from 'undici';

import Debug from './_Debug';
import { discordAPI } from './_DiscordAPI';
import { token } from './_globals';
let http = new Client(discordAPI.discord);

export default {
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
    REQUEST(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
        path: string,
        data?: string | Buffer,
        headers?: any,
        version?: 6 | 8 | 9
    ): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const params: any = {
                path: `/api/v${version || 8}` + path,
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
                body: data,
            };
            if (token) params.headers.authorization = `Bot ${token}`;
            const res = await http.request(params);

            const chunks = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                const str = Buffer.concat(chunks).toString();
                let d;
                if (!str) resolve({});
                // Sucess 200->299
                if (res.statusCode > 199 && res.statusCode < 300) {
                    try {
                        d = JSON.parse(str);
                    } catch (e) {
                        reject(e);
                    }
                } else if (res.statusCode === 429) {
                    // Handle Discord Rate Limits
                    setTimeout(() => {
                        this.REQUEST(method, path, data, headers).catch((e) =>
                            console.error(e)
                        );
                    }, JSON.parse(str)?.retry_after * 1000); // seconds -> milliseconds
                }
                resolve(d);
            });
        }).catch((e) => {
            new Debug(true).log(method, e);
            console.trace();
        });
    },

    GET(path: string, headers?: any): Promise<any> {
        return this.REQUEST('GET', path, undefined, headers, 9);
    },
    DELETE(path: string, headers?: any): Promise<any> {
        return this.REQUEST('DELETE', path, undefined, headers, 9);
    },
    POST(path: string, data?: string | Buffer, headers?: any): Promise<any> {
        return this.REQUEST('POST', path, data, headers, 9);
    },
    PUT(path: string, data?: string | Buffer, headers?: any): Promise<any> {
        return this.REQUEST('PUT', path, data, headers, 9);
    },
    PATCH(path: string, data?: string | Buffer, headers?: any): Promise<any> {
        return this.REQUEST('PATCH', path, data, headers, 9);
    },
};
