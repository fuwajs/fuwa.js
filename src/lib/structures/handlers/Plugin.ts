import { Client } from './Client';

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
}
