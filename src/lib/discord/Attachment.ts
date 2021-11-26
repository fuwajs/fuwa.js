import { writeFile } from 'fs';
import { join } from 'path';
import { Attachment as IAttachment } from '../../interfaces/message';
import http from '../structures/ws/http';
// import fs from 'fs';

export default class Attachment {
    // id: string;
    // filename: string;
    // size: number;
    // url: string;
    // proxy_url: string;
    // height: number | null;
    // width: number | null;

    constructor(protected data: IAttachment) {}
    get id() {
        return this.data.id;
    }
    get filename() {
        return this.data.filename;
    }
    get size() {
        return this.data.size;
    }
    get width() {
        return this.data.width ?? null;
    }
    get height() {
        return this.data.height ?? null;
    }
    get url() {
        return this.data.url;
    }
    get proxyUrl() {
        return this.data.url;
    }
    get contentType() {
        return this.data.content_type;
    }

    get(): Promise<Buffer> {
        return http.GET(this.url).then(({ buffer }) => buffer);
    }
    download(path?: string): Promise<void> {
        return new Promise(async (res, rej) => {
            const buffer = await this.get();
            const _path = path ?? join(process.cwd(), this.filename);
            writeFile(_path, buffer, err => (err ? rej(err) : res()));
        });
    }
}
