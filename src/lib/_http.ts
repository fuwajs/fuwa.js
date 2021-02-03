/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
/******************************************************************************
 * @file src/lib/_http.ts
 * @fileoverview Provides http functions using undici or fetch() depending on
 * the JavaScript/TypeScript environment.
 *****************************************************************************/

let hasFetch = false;
let request;
// @ts-ignore
if (typeof window !== undefined) {
    hasFetch = true;
    // @ts-ignore
    request = window.fetch;
}

let Client = {};

try {
    Client = require('undici').Client;
} catch { console.log('deno'); }
import Debug from './_Debug';
import { discordAPI } from './_DiscordAPI';
let http: any;
// @ts-ignore
if (!hasFetch && !window) { http = new Client(discordAPI.discord); }

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
        path: string, token?: string, data?: string | Buffer,
        version?: 6 | 8
    ): Promise<any> {
        if (!hasFetch) {
            return new Promise(async (resolve, reject) => {
                const params: any = {
                    path: `/api/v${version || 8}` + path,
                    method,
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: token ? `Bot ${token}` : undefined
                    },
                    body: data
                };
                try {
                    http.request(params).then(res => {
                        const chunks: Uint8Array[] = [];
                        res.body.on('data', (chunk: Uint8Array) => chunks.push(chunk));
                        res.body.on('end', () => {
                            const str = Buffer.concat(chunks).toString();
                            let d: unknown;
                            if (!str) resolve({});
                            // Sucess 200<->299
                            if (res.statusCode > 199 && res.statusCode < 300) {
                                try {
                                    d = JSON.parse(str);
                                } catch (e) { reject(e); }
                            } else if (res.statusCode === 429) { // Handle Discord Rate Limits
                                setTimeout(() => {
                                    this.REQUEST(method, path, token, data)
                                        .catch(e => console.error(e));
                                }, JSON.parse(str)?.retry_after * 1000); // seconds -> milliseconds
                            }
                            resolve(d);
                        });
                    });
                } catch (e) { reject(e); }
            }).catch(e => {
                new Debug(true).log(method, e);
                console.trace();
            });
        } else {
            return new Promise(async resolve => {
                const params: any = {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: token ? `Bot ${token}` : undefined
                    },
                    body: data,
                };
                resolve((await request(discordAPI.discord + '/api/v8' + path, params)).json());
            });
        }
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
    }
};
