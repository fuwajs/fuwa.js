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

import Globs from '../../../util/Global';

import { DISCORD_API, HTTPResponseCodes as APICodes } from '../../../interfaces';
import { isBrowser } from '../../../util';
import { URL } from 'url';
import { Blob } from 'buffer';
import { fetch } from 'undici';
import { Form } from './FormData';

export function bufferToBlob(buf: Buffer): Blob {
    const arr = new Uint16Array(buf.buffer, buf.byteOffset, buf.length / Uint16Array.BYTES_PER_ELEMENT);
    return new Blob([arr]);
}

// @ts-ignore
// const fetch = isBrowser() ? window.fetch : require('undici').fetch;
// @ts-ignore
// export const FormData: typeof FormDataType = isBrowser() ? window.FormData : require('undici').FormData;
// export function JSONToForm(data: any): FormDataType {
//     const form = new FormData();
//     form.append('payload_json', JSON.stringify(data));
//     const files: FileHandler[] = Object.keys(data)
//         .filter(_ => data[_] instanceof FileHandler)
//         .map(_ => data[_]);
//     if (files) {
//         files.forEach(val => {
//             // file handler

//             val.files.forEach((file, i) => {
//                 const url = URL.createObjectURL(bufferToBlob(file.buffer));
//                 form.append(`file[${i}]`, url, file.filename);
//             });
//         });
//     }
//     return form;
// }
export const ALLOWED_CODES = [APICodes.OKAY, APICodes.NoContent, APICodes.Created];

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
    ): Promise<{
        data: any;
        headers: Map<string, string>;
        buffer: Buffer;
        blob: Blob;
        _metadata: any;
        status: APICodes;
    }> {
        const url = path.startsWith(`http`) ? path : `${DISCORD_API.discord}/api/v${version || 8}` + path;
        const params: any = {
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
        return fetch(url, params).then(async res => {
            const status = res.status as APICodes;
            // if (status === APICodes.NoContent) return { data: {}, headers: res.headers, status };
            const blob = await res.blob();
            const buffer = Buffer.from(await blob.arrayBuffer());
            if (res.status === APICodes.BadRequest) console.log(params.body);
            // console.log(params.body);
            let data;
            try {
                data =
                    ALLOWED_CODES.includes(status) && res.ok
                        ? (JSON.parse(buffer.toString('utf-8')) as any)
                        : {};
            } catch {
                data = {};
            }
            return {
                _metadata: params,
                data,
                headers: res.headers as any,
                status,
                buffer,
                blob,
            };
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
