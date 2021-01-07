import { Client } from 'undici';
import { discordAPI } from './_DiscordAPI';
const http = new Client(discordAPI.discord);

export default {
    GET(path: string, token: string) {
        return new Promise(async (resolve) => {
            let res = await http.request({
                path,
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
            });
            let chunks: any[] = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                resolve(JSON.parse(Buffer.concat(chunks).toString()));
            });
        });
    },
    DELETE(path: string, token: string) {
        return new Promise(async (resolve) => {
            let res = await http.request({
                path: path,
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
            });
            let chunks: any[] = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                resolve(JSON.parse(Buffer.concat(chunks).toString()));
            });
        });
    },
    OTHER(method: string, path: string, token: string, data: any) {
        return new Promise(async (resolve) => {
            let res = await http.request({
                path: path,
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bot ' + token,
                },
                body: data,
            });
            let chunks: any[] = [];
            res.body.on('data', (chunk) => chunks.push(chunk));
            res.body.on('end', () => {
                resolve(JSON.parse(Buffer.concat(chunks).toString()));
            });
        });
    },
};
