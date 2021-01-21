/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
import { Client } from 'undici';
import Debug from './_Debug';
import { discordAPI } from './_DiscordAPI';
const http = new Client(discordAPI.discord);

export default {
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
    REQUEST(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
        path: string, token?: string, data?: string | Buffer
    ): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const params: Client.RequestOptions = {
                path: '/api/v8' + path,
                method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: data
            }
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
                    } catch (e) { reject(e) }
                } else if (res.statusCode === 429) { // Handle Discord Rate Limits
                    setTimeout(() => {
                        this.REQUEST(method, path, token, data)
                            .catch(e => console.error(e));
                    }, JSON.parse(str)?.retry_after * 1000); // seconds -> milliseconds
                }
                resolve(d);
            });

        }).catch(e => {
            new Debug(true).log(method, e);
            console.trace();
        });
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
