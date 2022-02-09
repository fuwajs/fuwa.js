import {} from '../../../interfaces/index.ts';
import http, { Response } from '../internet/http';
import type { Client } from './Client.ts';

export interface PluginOptions {
    /** Plugin name */
    name: string;
    /** Description of the plugin*/
    description: string;
}
export class Plugin {
    constructor(data: PluginOptions) {
        Object.assign(this, data);
    }
    event: (client: Client, data: any) => any;
    http: (client: Client, data: Response) => any;
}
