import http from '../ws/http';
import { CommandOptionTypes, ApplicationCommandCreateUpdateDelete } from '../../../interfaces';
import Globs from '../../../util/Global';

export interface CommandType {
    name: string;
    description: string;
    guild?: string;
    run(ctx: any /*Context */, args: { [key: string]: any });
}

export interface ArgumentType {
    type: keyof typeof CommandOptionTypes;
    description: string;
    name: string;
    command?: Command;
    required?: boolean;
}

export default class Command implements CommandType {
    id: string;
    name: string;
    description = 'This command has no description';
    guild?: string;
    run: (ctx: any /*Context */, args: { [key: string]: Argument }) => any;
    args: Argument[];
    constructor(data: CommandType) {
        Object.assign(this, data);
    }
    mount() {
        if (!Globs.appId) throw new Error('Application Id is required to do this action');
        let path = `/applications/${Globs.appId}`;
        if (this.guild) {
            path += `/guilds/${this.guild}/commands`;
        } else {
            path += '/commands';
        }
        return http
            .POST(path, JSON.stringify({ name: this.name, description: this.description }))
            .then((cmd: ApplicationCommandCreateUpdateDelete) => {
                this.id = cmd.id;
                return cmd;
            });
    }
    addArg(...args: Argument[]) {
        this.args.push(...args);
    }
}

export class Argument {
    type: CommandOptionTypes;
    description: string;
    name: string;
    required?: boolean;
    command?: Command;
    constructor(data: ArgumentType) {
        Object.assign(this, { ...data, type: CommandOptionTypes[data.type] });
    }
}
