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
    /** The id of the application command */
    id: string;
    /** The display name of the slash interaction.
     * Must be all lowercase.
     */
    name: string;
    description = 'This command has no description';
    /**
     * The guild for the command to be registered in. If left blank, the command will be registered as a global command.
     */
    guild?: string;
    /** An array of options for the command.
     * type of class Argument[]
     */
    args: Argument[];
    run: (ctx: any, args: { [key: string]: Argument }) => any;
    constructor(data: CommandType) {
        Object.assign(this, data);
    }
    public async mount(): Promise<ApplicationCommandCreateUpdateDelete> {
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
    public addArg(...args: Argument[]): void {
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
