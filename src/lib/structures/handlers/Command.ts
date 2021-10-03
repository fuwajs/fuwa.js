import { CommandOptionTypes } from '../../../interfaces/interactions';
import Globs from '../../../util/Global';

export interface CommandType {
    name: string;
    description: string;
    guild?: string;
    run(ctx: any /*Context */, args: { [key: string]: any });
}

console.log(Globs);

export interface ArgumentType {
    type: keyof typeof CommandOptionTypes;
    description: string;
    name: string;
    command?: Command;
    required?: boolean;
}

export default class Command implements CommandType {
    name: string;
    description = 'This command has no description';
    guild?: string;
    run: (ctx: any /*Context */, args: { [key: string]: Argument }) => any;
    args: Argument[];
    constructor(data: CommandType) {
        Object.assign(this, data);
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
