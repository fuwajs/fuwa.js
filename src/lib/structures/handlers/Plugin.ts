import Client from './Client';

export interface PluginOptions {
    name: string;
    desc: string;
}
export default class Plugin {
    constructor(data: PluginOptions) {
        Object.assign(this, data);
    }
    event: (client: Client, data: any) => any;
}
