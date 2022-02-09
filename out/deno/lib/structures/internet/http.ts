import { Buffer } from "https://deno.land/std@0.85.0/node/buffer.ts";
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
/******************************************************************************
 * @file src/lib/structures/internet/http.ts
 * @fileoverview Provides http functions using undici or fetch() depending on
 * the JavaScript/TypeScript environment.
 *****************************************************************************/

/**
 * TODO http
 */

import Globs from '../../../util/Global.ts';

import { DISCORD_API, HTTPResponseCodes as APICodes } from '../../../interfaces/index.ts';
import { fetch } from '../../../ports/fetch.ts';
import { Blob } from 'https://deno.land/std@0.85.0/node/buffer.ts';
import { Form } from './FormData.ts';

export function bufferToBlob(buf: Buffer): Blob {
    const arr = new Uint16Array(buf.buffer, buf.byteOffset, buf.length / Uint16Array.BYTES_PER_ELEMENT);
    return new Blob([arr]);
}

export type ParamsType = {
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
    headers: any;
    body: string | Buffer | Form;
};
export const ALLOWED_CODES = [APICodes.OKAY, APICodes.NoContent, APICodes.Created];
export type Response = {
    data: any;
    headers: Map<string, string>;
    buffer: Buffer;
    blob: Blob;
    _metadata: any;
    status: APICodes;
    body: string;
};
export default {
    /**
     * Use this if you want to handle Discord Rate limits automatically.
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
        data?: string | Buffer | Form,
        headers?: any,
        version?: 6 | 8 | 9
    ): Promise<Response> {
        const url = path.startsWith(`http`) ? path : `${DISCORD_API.discord}/api/v${version || 8}` + path;
        const params: ParamsType = {
            path: url,
            method,
            headers: {
                Authorization: `Bot ${Globs.token}`,
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,deflate',
                'User-Agent': `Fuwa.js/${Globs.version}`,
                ...headers,
            },
            body: data,
        };
        if (params.body instanceof Form) {
            params.headers['Content-Type'] = `multipart/form-data; boundary=${params.body.boundary}`;
            // params.body = JSONToForm(typeof params.body === 'string' ? JSON.parse(params.body) : params.body);
            // console.log(params.body);
            params.body = params.body.export();
        }
        return fetch(url, params as any).then(async res => {
            const status = res.status as APICodes;
            // if (status === APICodes.NoContent) return { data: {}, headers: res.headers, status };
            const blob = await res.blob();
            const buffer = Buffer.from(await blob.arrayBuffer());
            // console.log(params.body);
            let data;
            try {
                data =
                    res.headers.get('content-type') === 'application/json'
                        ? (JSON.parse(buffer.toString('utf-8')) as any)
                        : {};
            } catch {
                data = {};
            }
            if (data && !res.ok) {
                console.log(params);
                console.log(buffer.toString('utf-8'));
            }
            const ret: Response = {
                _metadata: params,
                data,
                headers: res.headers as any,
                status,
                buffer,
                blob,
                body: buffer.toString('utf-8'),
            };
            if (Globs.client) {
                Globs.client.plugins.forEach(plugin => plugin.http && plugin.http(Globs.client, ret));
            }
            return ret;
        });
    },

    /** Makes a GET request to the discord api and reads found data
     * @param path the api path to fetch
     */
    GET(path: string, headers?: any) {
        return this.REQUEST('GET', path, undefined, headers, 9);
    },
    /**
     * Delete some data from the discord api
     * @param path the api path to fetch
     */
    DELETE(path: string, headers?: any) {
        return this.REQUEST('DELETE', path, undefined, headers, 9);
    },
    /**
     * Creates new data for the discord api
     * @param path the api path to fetch
     */
    POST(path: string, data?: string | Buffer | Form, headers?: any) {
        return this.REQUEST('POST', path, data, headers, 9);
    },
    /**
     * Updates or replaces old data from the api
     * @param path the api path to fetch
     */
    PUT(path: string, data?: string | Buffer | Form, headers?: any) {
        return this.REQUEST('PUT', path, data, headers, 9);
    },
    /**
     * Modifies old data from the api.
     * @param path the api path to fetch
     */
    PATCH(path: string, data?: string | Buffer | Form, headers?: any) {
        return this.REQUEST('PATCH', path, data, headers, 9);
    },
};
