import http from '../internet/http';
import {
    CommandOptionTypes,
    ApplicationCommandCreateUpdateDelete as ApplicationCommand,
    ApplicationCommandCreate,
    ApplicationCommandOption,
    Role,
} from '../../../interfaces';
import Globs from '../../../util/Global';
import Context from '../../discord/Context';
import type { Client } from './Client';
import { Channel as ChannelHandler, User as UserHandler } from '../../discord';

export interface CommandType<T> {
    name: string;
    description: string;
    guild?: string;
    run?: CommandCallback<T>;
}
export type ArgumentConverterType = {
    [CommandOptionTypes.User]: [string, UserHandler];
    // [CommandOptionTypes.Role]: [string]
};
export const ArgumentConverter: {
    [arg in keyof ArgumentConverterType]: (
        data: ArgumentConverterType[arg][0]
    ) => Promise<ArgumentConverterType[arg][1]>;
} = {
    [CommandOptionTypes.User]: uid => UserHandler.get(uid),
};

export type CommandCallback<T> = (ctx: Context, args?: T) => any;

export interface ArgumentType<
    T extends typeof CommandOptionTypes[C],
    K extends CommandOptionTypeConverter[T],
    C extends keyof typeof CommandOptionTypes
> {
    type: C;
    /** The description of the argument */
    description: string;
    /** The name of the argument */
    name: string;
    /** If the argument is required*/
    required?: boolean;
    min?: K extends number ? number : undefined;
    max?: K extends number ? number : undefined;
    autocomplete?: boolean;
}

export class Command<T> implements CommandType<T> {
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
    args = new Array<Argument<any, any, any>>();
    subCommands = new Array<SubCommand<any>>();
    run: CommandCallback<T>;
    constructor(data: CommandType<T>) {
        Object.assign(this, data);
    }
    public async mount(): Promise<ApplicationCommand> {
        if (!Globs.appId) throw new Error('Application Id is required to do this action');
        let path = `/applications/${Globs.appId}`;
        if (this.guild) {
            path += `/guilds/${this.guild}/commands`;
        } else {
            path += '/commands';
        }
        const client = Globs.client as Client;
        // console.log(this.toJSON());
        return http.POST(path, JSON.stringify(this.toJSON())).then(({ data }) => {
            this.id = data.id;
            client.commands.set(this.id, this);
            return data;
        });
    }
    public addArg(...args: Argument<any, any, any>[]): this {
        this.args.push(...args);
        return this;
    }
    public addSubCommand(...args: SubCommand<any>[]) {
        this.subCommands.push(...args);
        return this;
    }
    public toString() {
        return `/${this.name}`;
    }
    public toJSON(): ApplicationCommandCreate {
        return {
            name: this.name,
            description: this.description,
            options: [
                ...this.subCommands.map(cmd => cmd.toOption()),
                ...this.args.map(arg => arg.toOption()),
            ],
        };
    }
    /**
     * Convert a slash command into a actual command
     * @param cmd The command you want to convert
     * @param run The callback for the command. This is required if mount is true
     * @param mount if the command should mount or not, the callback is required if so. defaults to false
     * @returns a new Command
     */
    public static from<T extends boolean>(
        cmd: ApplicationCommand,
        run: T extends true ? CommandCallback<any> : undefined,
        mount?: T
    ) {
        const client = Globs.client as Client;
        const command = new Command({
            description: cmd.description,
            guild: cmd.guild_id,
            run,
            name: cmd.name,
        });
        command.id = cmd.id;

        (mount ?? true) && client.commands.set(cmd.id, command);

        return command;
    }
}

export class SubCommand<T> extends Command<T> {
    constructor(data: CommandType<T>) {
        super(data);
    }

    toOption(): ApplicationCommandOption {
        return {
            type: CommandOptionTypes.SubCommand,
            name: this.name,
            description: this.description,
        };
    }
}
export type CommandOptionTypeConverter = {
    [CommandOptionTypes.SubCommand]: any;
    [CommandOptionTypes.SubCommandGroup]: any;
    [CommandOptionTypes.String]: string;
    [CommandOptionTypes.Integer]: number;
    [CommandOptionTypes.Boolean]: boolean;
    [CommandOptionTypes.User]: UserHandler;
    [CommandOptionTypes.Channel]: ChannelHandler;
    [CommandOptionTypes.Role]: Role;
    [CommandOptionTypes.Number]: number;
    [CommandOptionTypes.Mentionable]: Role | UserHandler;
};

/** The Argument used in the slash command. */
export class Argument<
    T extends typeof CommandOptionTypes[C],
    K extends CommandOptionTypeConverter[T],
    C extends keyof typeof CommandOptionTypes
> {
    public type: T;
    public description: string;
    public name: string;
    public required?: boolean;
    public autocomplete?: boolean;
    public min?: K extends number ? number | undefined : undefined;
    public max?: K extends number ? number | undefined : undefined;
    public constructor(data: ArgumentType<T, K, C>) {
        Object.assign(this, { ...data, type: CommandOptionTypes[data.type as any] });
    }
    public toOption(): ApplicationCommandOption {
        if (
            [CommandOptionTypes.Number, CommandOptionTypes.Integer].includes(this.type) &&
            (this.min || this.max)
        ) {
            throw new TypeError(
                'Min and/or max is only allowed when the type of the argument is Number or Integer'
            );
        }
        return {
            type: this.type,
            description: this.description,
            required: this.required,
            name: this.name,
            min_value: this.min,
            max_value: this.max,
            autocomplete: this.autocomplete,
        };
    }
}
