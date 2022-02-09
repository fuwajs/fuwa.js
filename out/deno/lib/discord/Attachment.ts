import { Buffer } from "https://deno.land/std@0.85.0/node/buffer.ts";
import { Blob } from 'https://deno.land/std@0.85.0/node/buffer.ts';
import { writeFileSync } from 'https://deno.land/std@0.85.0/node/fs.ts';
import { join } from 'https://deno.land/std@0.85.0/node/path.ts';
import { Attachment as IAttachment } from '../../interfaces/message/index.ts';
import http from '../structures/internet/http.ts';
// import fs from 'https://deno.land/std@0.85.0/node/fs.ts';

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
    /**
     * Attachment#Get
     * Fetch a discord attachment and get its url from a discord channel.
     * @returns url of the file
     */
    get(): Promise<Blob> {
        return http.GET(this.url).then(({ blob }) => blob);
    }
    async download(path?: string): Promise<void> {
        const buffer = Buffer.from(await this.get().then(b => b.arrayBuffer()));
        path ??= join(process.cwd(), this.filename);
        return writeFileSync(path, buffer);
    }
}
