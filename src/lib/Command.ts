import { CommandOptionTypes } from 'util/DiscordAPI';

export interface CommandType {
    name: string;
    desc: string;
    run(ctx: any /*Context */, args: { [key: string]: any });
}

export interface ArgumentType {
    type: keyof typeof CommandOptionTypes;
    desc: string;
    name: string;
    command?: Command;
}

export default class Command implements CommandType {
    name: string;
    desc = 'This command has no description';
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
