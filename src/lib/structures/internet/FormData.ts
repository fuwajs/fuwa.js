const NEWLINE = '\r\n';
const BOUNDARY = '--FUWA';
const FORM_START = 'Content-Disposition: form-data; ';
export class Form {
    public str = '';
    constructor() {}

    append(
        name: string,
        value: string,
        options?: { contentType?: string; headers?: { [key: string]: string } }
    ) {
        options ??= {};
        this.str += this.formatObject(name, value, options.headers, options.contentType);
    }
    protected handleVars(data: { [key: string]: string }) {
        const vars: [string, string][] = [...Object.entries(data)];

        const handledVars = vars.map(([key, val]) => `${key}="${val}"`).join('; ');
        return handledVars;
    }
    protected formatObject(
        name: string,
        data: string,
        variables?: { [key: string]: string },
        contentType?: string
    ): string {
        const vars = this.handleVars({ name, ...variables });

        // prettier-ignore
        return BOUNDARY + 
               NEWLINE + 
               FORM_START + vars +
               // add content type if its provided
               (contentType ? `${NEWLINE}Content-Type: ${contentType}` : '') +
               NEWLINE + NEWLINE
               + data
               + NEWLINE
    }

    export() {
        return this.str;
    }
}
const form = new Form();

form.append('insane', 'value');

form.append('not', 'insane form', { headers: { filename: 'insane name' } });

console.log(form.export());
