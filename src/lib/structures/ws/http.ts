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
import type _fetch from 'undici-fetch';

// @ts-ignore
const fetch: typeof _fetch = isBrowser() ? window.fetch : require('undici-fetch');
export const ALLOWED_CODES = [APICodes.OKAY, APICodes.NoContent, APICodes.Created];

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
    ) {
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
        return fetch(`${discordAPI.discord}/api/v${version || 8}` + path, params).then(async res => {
            const status = res.status as APICodes;
            if (status === APICodes.NoContent) return { data: {}, headers: res.headers, status };
            const data = ALLOWED_CODES.includes(status) ? await res.json() : {};
            console.log(data);
            return {
                data,
                headers: res.headers,
                status,
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
    async PUT(path: string, data?: string | Buffer, headers?: any) {
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
