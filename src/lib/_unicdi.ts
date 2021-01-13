/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-async-promise-executor */ // should be fixed soon
import { Client } from 'undici';
import { discordAPI } from './_DiscordAPI';
const http = new Client(discordAPI.discord);

export default {
    GET(path: string, token: string): Promise<any> {

        return new Promise(async (resolve, reject) => {
            const res = await http.request({
                path,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
            });
            const chunks = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                try {
                    resolve(JSON.parse(Buffer.concat(chunks).toString()));
                } catch (error) {
                    reject(error);
                }
            });
        });
    },
    DELETE(path: string, token: string): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const res = await http.request({
                path: path,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
            });
            const chunks = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                try {
                    resolve(JSON.parse(Buffer.concat(chunks).toString()));
                } catch (error) {
                    reject(error);
                }
            });
        });
    },
    POST(path: string, token: string, data: string | Buffer): Promise<string> {
        return new Promise(async (resolve, reject) => {
            const res = await http.request({
                path: path,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
                body: data,
            });
            const chunks: any[] = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                resolve(Buffer.concat(chunks).toString());
            });
        });
    },
    PUT(path: string, token: string, data: any): Promise<string> {
        return new Promise(async (resolve, reject) => {
            const res = await http.request({
                path: '/api/v8' + path,
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
                body: data,
            });
            const chunks: any[] = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                resolve(Buffer.concat(chunks).toString());
            });
        });
    },
    OTHER(method: string, path: string, token: string, data: any): Promise<any> {
        return new Promise(async (resolve, reject) => {
            const res = await http.request({
                path: path,
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
                body: data,
            });
            const chunks: any[] = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                try {
                    resolve(JSON.parse(Buffer.concat(chunks).toString()));
                } catch (error) {
                    reject(error);
                }
            });
        });
    },
};
