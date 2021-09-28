import type { Role } from '../DiscordAPI';
import type { User } from '../member/DiscordAPI';
import type { CreateMessage, Message } from '../message/DiscordAPI';
import type { InteractionChannel, InteractionGuildMember } from './DiscordAPI.ts';

/** @see https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptiontype */
export enum ApplicationCommandOptionTypes {
    SubCommand = 1,
    SubCommandGroup,
    String,
    Integer,
    Boolean,
    User,
    Channel,
    Role,
    Mentionable,
    Number,
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoption */
export interface ApplicationCommandOption {
    /** Value of Application Command Option Type */
    type: ApplicationCommandOptionTypes;
    /** 1-32 character name matching lowercase `^[\w-]{1,32}$` */
    name: string;
    /** 1-100 character description */
    description: string;
    /** If the parameter is required or optional--default `false` */
    required?: boolean;
    /** Choices for `string` and `int` types for the user to pick from */
    choices?: ApplicationCommandOptionChoice[];
    /** If the option is a subcommand or subcommand group type, this nested options will be the parameters */
    options?: ApplicationCommandOption[];
}

export enum ApplicationCommandTypes {
    ChatInput = 1,
    User,
    Message,
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#applicationcommandoptionchoice */
export interface ApplicationCommandOptionChoice {
    /** 1-100 character choice name */
    name: string;
    /** Value of the choice, up to 100 characters if string */
    value: string | number;
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondata */
export interface ApplicationCommandInteractionData {
    /** The Id of the invoked command */
    id: string;
    /** The name of the invoked command */
    name: string;
    /** Converted users + roles + channels */
    resolved?: ApplicationCommandInteractionDataResolved;
    /** The params + values from the user */
    options?: ApplicationCommandInteractionDataOption[];
    /** The target id if this is a context menu command. */
    targetId?: string;
}

export interface ApplicationCommandInteractionDataResolved {
    /** The Ids and Message objects */
    messages?: Record<string, Message>;
    /** The Ids and User objects */
    users?: Record<string, User>;
    /** The Ids and partial Member objects */
    members?: Record<string, Omit<InteractionGuildMember, 'user' | 'deaf' | 'mute'>>;
    /** The Ids and Role objects */
    roles?: Record<string, Role>;
    /** The Ids and partial Channel objects */
    channels?: Record<string, Pick<InteractionChannel, 'id' | 'name' | 'type' | 'permissions'>>;
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondataoption */
export type ApplicationCommandInteractionDataOption =
    | ApplicationCommandInteractionDataOptionSubCommand
    | ApplicationCommandInteractionDataOptionSubCommandGroup
    | ApplicationCommandInteractionDataOptionWithValue;

export type ApplicationCommandInteractionDataOptionWithValue =
    | ApplicationCommandInteractionDataOptionString
    | ApplicationCommandInteractionDataOptionInteger
    | ApplicationCommandInteractionDataOptionNumber
    | ApplicationCommandInteractionDataOptionBoolean
    | ApplicationCommandInteractionDataOptionUser
    | ApplicationCommandInteractionDataOptionChannel
    | ApplicationCommandInteractionDataOptionRole
    | ApplicationCommandInteractionDataOptionMentionable;

interface ApplicationCommandInteractionDataOptionBase<T extends ApplicationCommandOptionTypes, V = unknown> {
    /** The name of the parameter */
    name: string;
    /** Type of the option */
    type: T;
    /** The value of the pair */
    value: V;
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#interaction-applicationcommandinteractiondata */
export interface ApplicationCommandInteractionData {
    /** The Id of the invoked command */
    id: string;
    /** The name of the invoked command */
    name: string;
    /** Converted users + roles + channels */
    resolved?: ApplicationCommandInteractionDataResolved;
    /** The params + values from the user */
    options?: ApplicationCommandInteractionDataOption[];
    /** The target id if this is a context menu command. */
    targetId?: string;
}

export interface ApplicationCommandInteractionDataOptionSubCommand
    extends Omit<
        ApplicationCommandInteractionDataOptionBase<ApplicationCommandOptionTypes.SubCommand>,
        'value'
    > {
    /** Present if this option is a group or subcommand */
    options?: ApplicationCommandInteractionDataOptionWithValue[];
}

export interface ApplicationCommandInteractionDataOptionSubCommandGroup
    extends Omit<
        ApplicationCommandInteractionDataOptionBase<ApplicationCommandOptionTypes.SubCommandGroup>,
        'value'
    > {
    /** Present if this option is a group or subcommand */
    options?: ApplicationCommandInteractionDataOptionSubCommand[];
}

export type ApplicationCommandInteractionDataOptionString = ApplicationCommandInteractionDataOptionBase<
    ApplicationCommandOptionTypes.String,
    string
>;

export type ApplicationCommandInteractionDataOptionInteger = ApplicationCommandInteractionDataOptionBase<
    ApplicationCommandOptionTypes.Integer,
    number
>;

export type ApplicationCommandInteractionDataOptionNumber = ApplicationCommandInteractionDataOptionBase<
    ApplicationCommandOptionTypes.Number,
    number
>;

export type ApplicationCommandInteractionDataOptionBoolean = ApplicationCommandInteractionDataOptionBase<
    ApplicationCommandOptionTypes.Boolean,
    boolean
>;

export type ApplicationCommandInteractionDataOptionUser = ApplicationCommandInteractionDataOptionBase<
    ApplicationCommandOptionTypes.User,
    string
>;

export type ApplicationCommandInteractionDataOptionChannel = ApplicationCommandInteractionDataOptionBase<
    ApplicationCommandOptionTypes.Channel,
    string
>;

export type ApplicationCommandInteractionDataOptionRole = ApplicationCommandInteractionDataOptionBase<
    ApplicationCommandOptionTypes.Role,
    string
>;

export type ApplicationCommandInteractionDataOptionMentionable = ApplicationCommandInteractionDataOptionBase<
    ApplicationCommandOptionTypes.Mentionable,
    string
>;

export enum ApplicationCommandPermissionTypes {
    Role = 1,
    User,
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#applicationcommandpermissions */
export interface ApplicationCommandPermissions {
    /** The id of the role or user */
    id: string;
    /** Role or User */
    type: ApplicationCommandPermissionTypes;
    /** `true` to allow, `false`, to disallow */
    permission: boolean;
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#create-global-application-command-json-params */
export interface CreateGlobalApplicationCommand {
    /** 1-31 character name matching lowercase `^[\w-]{1,32}$` */
    name: string;
    /** 1-100 character description */
    description: string;
    /** The type of the command */
    type?: ApplicationCommandTypes;
    /** The parameters for the command */
    options?: ApplicationCommandOption[];
}

export interface CreateGlobalContextMenuCommand {
    /** 1-31 character name matching `^[\w-]{1,32}$` */
    name: string;
    /** The type of the command */
    type: ApplicationCommandTypes;
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#create-guild-application-command-json-params */
export interface CreateGuildApplicationCommand {
    /** 1-31 character name matching lowercase `^[\w-]{1,32}$` */
    name: string;
    /** 1-100 character description */
    description?: string;
    /** The parameters for the command */
    options?: ApplicationCommandOption[];
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#edit-global-application-command-json-params */
export interface EditGlobalApplicationCommand {
    /** 1-32 character name matching lowercase `^[\w-]{1,32}$` */
    name?: string;
    /** 1-100 character description */
    description?: string;
    /** The type of the command */
    type?: ApplicationCommandTypes;
    /** The parameters for the command */
    options?: ApplicationCommandOption[] | null;
    /** Whether the command is enabled by default when the app is added to a guild. Default: true */
    defaultPermission?: boolean;
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#edit-guild-application-command-json-params */
export interface EditGuildApplicationCommand {
    /** 1-31 character name matching lowercase `^[\w-]{1,32}$` */
    name?: string;
    /** 1-100 character description */
    description?: string;
    /** The parameters for the command */
    options?: ApplicationCommandOption[] | null;
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#guildapplicationcommandpermissions */
export interface GuildApplicationCommandPermissions {
    /** The id of the command */
    id: string;
    /** The id of the application to command belongs to */
    applicationId: string;
    /** The id of the guild */
    guildId: string;
    /** The permissions for the command in the guild */
    permissions: ApplicationCommandPermissions[];
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionapplicationcommandcallbackdata */
export interface InteractionApplicationCommandCallbackData extends Omit<CreateMessage, 'messageReference'> {
    /** Set to `64` to make your response ephemeral */
    flags?: number;
}
