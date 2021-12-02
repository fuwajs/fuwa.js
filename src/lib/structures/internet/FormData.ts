import { Blob } from 'buffer';
import { File } from '..';

export const NEWLINE = '\r\n';
// export const BOUNDARY = '--boundary';
export const FORM_START = 'Content-Disposition: form-data; ';
export class Form {
    public str = '';
    // public boundary = `${(Math.random() + 1).toString(32).substring(2)}`;
    public boundary = `boundary`;
    // constructor() {}
    async append(
        name: string,
        value: any,
        options?: { contentType?: string; headers?: { [key: string]: string } }
    ) {
        options ??= {};
        const formatted = await this.formatObject(name, value, options.headers, options.contentType);
        this.str += formatted;
    }
    protected handleVars(data: { [key: string]: string }) {
        const vars: [string, string][] = [...Object.entries(data)];

        const handledVars = vars.map(([key, val]) => `${key}="${val}"`).join('; ');
        return handledVars;
    }
    protected async formatObject(
        name: string,
        data: any,
        variables?: { [key: string]: string },
        contentType?: string
    ): Promise<string> {
        const vars = this.handleVars({ name, ...variables });
        contentType ??=
            data instanceof Blob
                ? data.type
                : typeof data === 'object'
                ? 'application/json'
                : ArrayBuffer.isView(data)
                ? 'application/octet-stream'
                : '';

        if (Buffer.isBuffer(data)) {
            data = data.toString('base64');
        } else if (data instanceof Blob) {
            const buf = await File.blobToBuffer(data);
            if (['image/gif', 'image/jpeg', 'image/png'].includes(contentType)) {
                data = `data:${contentType};base64,${buf.toString('base64url')}`;
                console.log(data);
            } else {
                data = buf.toString('utf8');
            }
        } else if (['number', 'string', 'boolean'].includes(typeof data)) {
            data = data;
        } else {
            data = JSON.stringify(data);
        }
        // console.log({ type: typeof data, contentType, name, data });
        // console.log(data);
        // prettier-ignore
        const ret = `--${this.boundary}` + 
                    NEWLINE + 
                    FORM_START + vars +
                    // add content type if its provided
                    (contentType ? `${NEWLINE}Content-Type: ${contentType}` : '') +
                    NEWLINE + NEWLINE
                    + data
                    + NEWLINE;
        // console.log(ret);
        return ret;
    }

    export() {
        return this.str + `--${this.boundary}--`;
    }
}
