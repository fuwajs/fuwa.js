/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
/******************************************************************************
 * @file src/lib/_http.ts
 * @fileoverview Provides http functions using undici or fetch() depending on
 * the JavaScript/TypeScript environment.
 *****************************************************************************/

/**
 * TODO http
 */

import Globs from '../../../util/Global';

import { discordAPI, HTTPResponseCodes as APICodes } from '../../../interfaces';
import { isBrowser } from '../../../util';
import { URL } from 'url';
import { Blob } from 'buffer';
import { fetch } from 'undici';

export class FileHandler {
    constructor(public files: { buffer: Buffer; filename: string }[]) {}
}

export function bufferToBlob(buf: Buffer): Blob {
    const arr = new Uint16Array(buf.buffer, buf.byteOffset, buf.length / Uint16Array.BYTES_PER_ELEMENT);
    return new Blob([arr]);
}

// @ts-ignore
// const fetch = isBrowser() ? window.fetch : require('undici').fetch;
// @ts-ignore
export const FormData: typeof FormDataType = isBrowser() ? window.FormData : require('undici').FormData;
export function JSONToForm(data: any): FormDataType {
    const form = new FormData();
    form.append('payload_json', JSON.stringify(data));
    const files: FileHandler[] = Object.keys(data)
        .filter(_ => data[_] instanceof FileHandler)
        .map(_ => data[_]);
    if (files) {
        files.forEach(val => {
            // file handler

            val.files.forEach((file, i) => {
                const url = URL.createObjectURL(bufferToBlob(file.buffer));
                form.append(`file[${i}]`, url, file.filename);
            });
        });
    }
    return form;
}
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
        data?: string | Buffer | FormDataType,
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
        const params: any = {
            // path: `/api/v${version || 8}` + path,
            method,
            headers: {
                Authorization: `Bot ${Globs.token}`,
                'Content-Type': 'application/json',
                ...headers,
            },
            body: data,
        };
        if (params.headers['Content-Type'] === 'multipart/form-data') {
            console.log('Found form', JSON.parse(params.body));
            params.body = JSONToForm(typeof params.body === 'string' ? JSON.parse(params.body) : params.body);
            console.log([...params.body.keys()].map(key => [key, params.body.get(key)]));
        }
        const url = path.startsWith(`http`) ? path : `${discordAPI.discord}/api/v${version || 8}` + path;
        return fetch(url, params).then(async res => {
            const status = res.status as APICodes;
            // if (status === APICodes.NoContent) return { data: {}, headers: res.headers, status };
            const blob = await res.blob();
            const buffer = Buffer.from(await blob.arrayBuffer());
            if (res.status === APICodes.BadRequest) console.error(params, status, buffer.toString());
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
    POST(path: string, data?: string | Buffer, headers?: any) {
        return this.REQUEST('POST', path, data, headers, 9);
    },
    /**
     * Updates or replaces old data from the api
     * @param path the api path to fetch
     */
    PUT(path: string, data?: string | Buffer, headers?: any) {
        return this.REQUEST('PUT', path, data, headers, 9);
    },
    /**
     * Modifies old data from the api.
     * @param path the api path to fetch
     */
    PATCH(path: string, data?: string | Buffer, headers?: any) {
        return this.REQUEST('PATCH', path, data, headers, 9);
    },
};
/** Credit to undici */
export declare class FormDataType {
    /**
     * Appends a new value onto an existing key inside a FormData object,
     * or adds the key if it does not already exist.
     *
     * The difference between `set()` and `append()` is that if the specified key already exists, `set()` will overwrite all existing values with the new one, whereas `append()` will append the new value onto the end of the existing set of values.
     *
     * @param name The name of the field whose data is contained in `value`.
     * @param value The field's value. This can be [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
      or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File). If none of these are specified the value is converted to a string.
     * @param fileName The filename reported to the server, when a Blob or File is passed as the second parameter. The default filename for Blob objects is "blob". The default filename for File objects is the file's filename.
     */
    append(name: string, value: unknown, fileName?: string): void;

    /**
     * Set a new value for an existing key inside FormData,
     * or add the new field if it does not already exist.
     *
     * @param name The name of the field whose data is contained in `value`.
     * @param value The field's value. This can be [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
      or [`File`](https://developer.mozilla.org/en-US/docs/Web/API/File). If none of these are specified the value is converted to a string.
     * @param fileName The filename reported to the server, when a Blob or File is passed as the second parameter. The default filename for Blob objects is "blob". The default filename for File objects is the file's filename.
     *
     */
    set(name: string, value: unknown, fileName?: string): void;

    /**
     * Returns the first value associated with a given key from within a `FormData` object.
     * If you expect multiple values and want all of them, use the `getAll()` method instead.
     *
     * @param {string} name A name of the value you want to retrieve.
     *
     * @returns A `FormDataEntryValue` containing the value. If the key doesn't exist, the method returns null.
     */
    get(name: string): any | null;

    /**
     * Returns all the values associated with a given key from within a `FormData` object.
     *
     * @param {string} name A name of the value you want to retrieve.
     *
     * @returns An array of `FormDataEntryValue` whose key matches the value passed in the `name` parameter. If the key doesn't exist, the method returns an empty list.
     */
    getAll(name: string): any[];

    /**
     * Returns a boolean stating whether a `FormData` object contains a certain key.
     *
     * @param name A string representing the name of the key you want to test for.
     *
     * @return A boolean value.
     */
    has(name: string): boolean;

    /**
     * Deletes a key and its value(s) from a `FormData` object.
     *
     * @param name The name of the key you want to delete.
     */
    delete(name: string): void;

    /**
     * Returns an [`iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) allowing to go through all keys contained in this `FormData` object.
     * Each key is a `string`.
     */
    keys(): Generator<string>;

    /**
     * Returns an [`iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) allowing to go through the `FormData` key/value pairs.
     * The key of each pair is a string; the value is a [`FormDataValue`](https://developer.mozilla.org/en-US/docs/Web/API/FormDataEntryValue).
     */
    entries(): Generator<[string, any]>;

    /**
     * Returns an [`iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) allowing to go through all values contained in this object `FormData` object.
     * Each value is a [`FormDataValue`](https://developer.mozilla.org/en-US/docs/Web/API/FormDataEntryValue).
     */
    values(): Generator<any>;

    /**
     * An alias for FormData#entries()
     */
    [Symbol.iterator](): Generator<[string, any], void>;

    /**
     * Executes given callback function for each field of the FormData instance
     */
    forEach(callback: (value: any, key: string, formData: FormDataType) => void, thisArg?: unknown): void;

    readonly [Symbol.toStringTag]: string;
}
