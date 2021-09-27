import { CommandOptionTypes } from '../../util/DiscordAPI';
import Globs from '../../util/Global';

export interface CommandType {
    name: string;
    description: string;
    run(ctx: any /*Context */, args: { [key: string]: any });
}

console.log(Globs);

export interface ArgumentType {
    type: keyof typeof CommandOptionTypes;
    description: string;
    name: string;
    command?: Command;
}

export default class Command implements CommandType {
    name: string;
    description = 'This command has no description';
    run: (ctx: any /*Context */, args: { [key: string]: Argument }) => any;
    args: Argument[];
    constructor(data: CommandType) {
        Object.assign(this, data);
    }
}

export class Argument {
    type: CommandOptionTypes;
    desc: string;
    name: string;
    command?: Command;
    constructor(data: ArgumentType) {
        Object.assign(this, { ...data, type: CommandOptionTypes[data.type] });
    }
}
