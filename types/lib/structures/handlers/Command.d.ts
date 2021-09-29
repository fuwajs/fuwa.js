import { CommandOptionTypes } from '../../../interfaces/interactions';
export interface CommandType {
    name: string;
    description: string;
    run(ctx: any, args: {
        [key: string]: any;
    }): any;
}
export interface ArgumentType {
    type: keyof typeof CommandOptionTypes;
    description: string;
    name: string;
    command?: Command;
}
export default class Command implements CommandType {
    name: string;
    description: string;
    run: (ctx: any, args: {
        [key: string]: Argument;
    }) => any;
    args: Argument[];
    constructor(data: CommandType);
}
export declare class Argument {
    type: CommandOptionTypes;
    description: string;
    name: string;
    command?: Command;
    constructor(data: ArgumentType);
}
//# sourceMappingURL=Command.d.ts.map