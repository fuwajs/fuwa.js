import http from '../ws/http';
import {
    CommandOptionTypes,
    ApplicationCommandCreateUpdateDelete as ApplicationCommand,
    ApplicationCommandCreate,
    ApplicationCommandOption,
} from '../../../interfaces';
import Globs from '../../../util/Global';
import Context from '../../discord/Context';
import type { Client } from './Client';

export interface CommandType {
    name: string;
    description: string;
    guild?: string;
    run?: CommandCallback;
}
export type CommandCallback = <T>(ctx: Context, args?: T) => any;

export interface ArgumentType {
    type: keyof typeof CommandOptionTypes;
    description: string;
    name: string;
    required?: boolean;
}

export class Command implements CommandType {
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
    args = new Array<Argument>();
    subCommands = new Array<SubCommand>();
    run: CommandCallback;
    constructor(data: CommandType) {
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
        console.log(this.toJSON());
        return http.POST(path, JSON.stringify(this.toJSON())).then(({ data }) => {
            this.id = data.id;
            client.commands.set(this.id, this);
            return data;
        });
    }
    public addArg(...args: Argument[]): this {
        this.args.push(...args);
        return this;
    }
    public addSubCommand(...args: SubCommand[]) {
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
        run: T extends true ? CommandCallback : undefined,
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

export class SubCommand extends Command {
    constructor(data: CommandType) {
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

export class Argument {
    type: CommandOptionTypes;
    description: string;
    name: string;
    required?: boolean;
    constructor(data: ArgumentType) {
        Object.assign(this, { ...data, type: CommandOptionTypes[data.type] });
    }
    toOption(): ApplicationCommandOption {
        return {
            type: this.type,
            description: this.description,
            required: this.required,
            name: this.name,
        };
    }
}
