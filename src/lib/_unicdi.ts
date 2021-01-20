/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
import { Client } from 'undici';
import { discordAPI } from './_DiscordAPI';
const http = new Client(discordAPI.discord);

export default {
    /** 
     * Use this if you want to handle Discord Rate limits automatically.
     *!! Be aware that this function is **recursive**
     */
    REQUEST(
        method: 'GET' | 'POST' | 'PUT' | 'DELETE',
        path: string, token: string, data?: string | Buffer
    ): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const res = await http.request({
                path: '/api/v8' + path,
                method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
                body: data
            });

            const chunks = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                let d;
                if (!Buffer.concat(chunks).toString()) resolve({});
                try {
                    d = JSON.parse(Buffer.concat(chunks).toString());
                } catch (e) {
                    reject(e);
                }

                if (res.statusCode === 429) { // Handle Discord Rate Limits
                    setTimeout(() => {
                        this.REQUEST(method, path, token, data)
                            .catch(e => console.error(e));
                    }, d?.retry_after * 1000);
                }
                resolve(d);
            });

        });
    },

    GET(path: string, token: string): Promise<any> {
        return this.REQUEST('GET', path, token);
    },
    DELETE(path: string, token: string): Promise<any> {
        return this.REQUEST('DELETE', path, token);
    },
    POST(path: string, token: string, data?: string | Buffer): Promise<any> {
        return this.REQUEST('POST', path, token, data);
    },
    PUT(path: string, token: string, data?: string | Buffer): Promise<any> {
        return this.REQUEST('PUT', path, token, data);
    }
};
