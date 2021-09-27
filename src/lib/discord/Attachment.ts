import { Attachment as IAttachment } from '../../util/DiscordAPI';
// import fs from 'fs';

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