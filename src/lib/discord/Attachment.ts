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

    get(): Promise<Blob> {
        return http.GET(this.url).then(({ blob }) => blob);
    }
    download(path?: string): Promise<void> {
        return new Promise(async (res, rej) => {
            const blob = await this.get();
            const buffer = Buffer.from(await blob.arrayBuffer());
            writeFile(path ?? join(process.cwd(), this.filename), buffer, err => {
                if (err) {
                    rej(err);
                } else {
                    res();
                }
            });
        });
    }
}
