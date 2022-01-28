export * from './ApplicationTypes';
import type { ResolvedData, CommandOptions } from '../DiscordAPI';
import type { GuildMemberWithUser, User } from '../member';
import type { Message, ComponentType, ButtonData, SelectMenuData, SelectOption } from '../message';
import type { ApplicationCommandInteractionData } from './ApplicationTypes';
import { GuildMember } from '../';
import { Channel } from '../..';
/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export * from './ApplicationTypes';
import { ApplicationCommandType } from './ApplicationTypes';

/** @link https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-structure */
export interface Interaction {
    id: string;
    application_id: string;
    type: InteractionTypes;
    data?: InteractionData;
    guild_id?: string;
    channel_id?: string;
    member?: GuildMember;
    user?: User;
    token: string;
    version: 1;
    message?: Message;
}

export enum InteractionTypes {
    Ping = 1,
    ApplicationCommand,
    MessageComponent,
}

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 */
export enum CommandOptionTypes {
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

export interface BaseInteraction<
    T extends InteractionTypes,
    D extends ApplicationCommandInteractionData | ButtonData | SelectMenuData | undefined
> {
    /** Id of the interaction */
    id: string;
    /** Id of the application this interaction is for */
    applicationId: string;
    /** The type of interaction */
    type: T;
    /** The guild it was sent from */
    guildId?: string;
    /** The channel it was sent from */
    channelId?: string;
    /** Guild member data for the invoking user, including permissions */
    member?: InteractionGuildMember;
    /** User object for the invoking user, if invoked in a DM */
    user?: User;
    /** A continuation token for responding to the interaction */
    token: string;
    /** Read-only property, always `1` */
    version: 1;
    /** For the message the button was attached to */
    message?: Message;

    data?: D;
}

export interface BigInteraction
    extends Omit<
        Interaction,
        'id' | 'applicationId' | 'guildId' | 'channelId' | 'member' | 'user' | 'message'
    > {
    /** Id of the interaction */
    id: string;
    /** Id of the application this interaction is for */
    application_id: string;
    /** The guild it was sent from */
    guild_id?: string;
    /** The channel it was sent from */
    channel_id?: string;
    /** Guild member data for the invoking user, including permissions */
    member?: Omit<InteractionGuildMember, 'roles' | 'user'> & {
        /** Array of role object ids */
        roles: string[];
        /** The user this guild member represents */
        user: Omit<User, 'id'> & {
            /** The user's id */
            id: string;
        };
    };
    /** User object for the invoking user, if invoked in a DM */
    user: Omit<User, 'id'> & { id: string };
    /** For the message the button was attached to */
    message?: Message;
}

export interface InteractionData {
    id: string;
    name: string;
    type: ApplicationCommandType;
    resolved?: ResolvedData;
    options?: CommandOptions[];
    custom_id?: string;
    component_type?: ComponentType;
    values?: SelectOption[];
    target_id?: string;
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#interaction-response-interactionresponsetype */
export enum InteractionResponseTypes {
    /** ACK a `Ping` */
    Pong = 1,
    /** Respond to an interaction with a message */
    ChannelMessageWithSource = 4,
    /** ACK an interaction and edit a response later, the user sees a loading state */
    DeferredChannelMessageWithSource = 5,
    /** For components, ACK an interaction and edit the original message later; the user does not see a loading state */
    DeferredUpdateMessage,
    /** For components, edit the message the component was attached to */
    UpdateMessage,
}

/** @see https://discord.com/developers/docs/interactions/slash-commands#messageinteraction */
export interface MessageInteraction {
    /** Id of the interaction */
    id: string;
    /** The type of interaction */
    type: InteractionTypes;
    /** The name of the ApplicationCommand */
    name: string;
    /** The user who invoked the interaction */
    user: User;
}

export interface InteractionChannel extends Channel {
    /** computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction */
    id: string;
    // type: string;
    name: string;
    permissions: string;
}

/** @see https://discord.com/developers/docs/resources/guild#guild-member-object */
export interface InteractionGuildMember extends GuildMemberWithUser {
    /** Total permissions of the member in the channel, including overwrites, returned when in the interaction object */
    permissions: string;
}
