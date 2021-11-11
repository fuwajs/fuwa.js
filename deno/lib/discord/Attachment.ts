import { Attachment as IAttachment } from '../../interfaces/message/index.ts';
// import fs from 'https://deno.land/std@0.85.0/node/fs.ts';

export default class Attachment implements IAttachment {
    id: string;
    filename: string;
    size: number;
    url: string;
    proxy_url: string;
    height: number | null;
    width: number | null;

    constructor(/* path: string*/) {
        // const f = fs.readFileSync(path, 'binary');
        // // just o
        // this.id = f.toString();
    }
}
