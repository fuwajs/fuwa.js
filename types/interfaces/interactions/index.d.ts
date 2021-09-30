/// <reference types="node" />
export * from './ApplicationTypes';
import type { Channel } from 'diagnostics_channel';
import type { ResolvedData, CommandOptions } from '../DiscordAPI';
import type { GuildMemberWithUser, User } from '../member';
import type { Message, ComponentType, ButtonData, SelectMenuData, SelectOption } from '../message';
import type { ApplicationCommandInteractionData } from './ApplicationTypes';
/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export declare enum ApplicationCommandType {
    ChatInput = 1,
    User = 2,
    Message = 3
}
/** @see https://discord.com/developers/docs/interactions/slash-commands#interaction */
export declare type Interaction = InteractionTypes;
export declare enum InteractionTypes {
    Ping = 1,
    ApplicationCommand = 2,
    MessageComponent = 3
}
/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-option-type
 */
export declare enum CommandOptionTypes {
    SubCommand = 1,
    SubCommandGroup = 2,
    String = 3,
    Integer = 4,
    Boolean = 5,
    User = 6,
    Channel = 7,
    Role = 8,
    Mentionable = 9,
    Number = 10
}
export interface BaseInteraction<T extends InteractionTypes, D extends ApplicationCommandInteractionData | ButtonData | SelectMenuData | undefined> {
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
export interface BigInteraction extends Omit<Interaction, 'id' | 'applicationId' | 'guildId' | 'channelId' | 'member' | 'user' | 'message'> {
    /** Id of the interaction */
    id: bigint;
    /** Id of the application this interaction is for */
    applicationId: bigint;
    /** The guild it was sent from */
    guildId?: bigint;
    /** The channel it was sent from */
    channelId?: bigint;
    /** Guild member data for the invoking user, including permissions */
    member?: Omit<InteractionGuildMember, 'roles' | 'user'> & {
        /** Array of role object ids */
        roles: bigint[];
        /** The user this guild member represents */
        user: Omit<User, 'id'> & {
            /** The user's id */
            id: bigint;
        };
    };
    /** User object for the invoking user, if invoked in a DM */
    user: Omit<User, 'id'> & {
        id: bigint;
    };
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
export declare enum InteractionResponseTypes {
    /** ACK a `Ping` */
    Pong = 1,
    /** Respond to an interaction with a message */
    ChannelMessageWithSource = 4,
    /** ACK an interaction and edit a response later, the user sees a loading state */
    DeferredChannelMessageWithSource = 5,
    /** For components, ACK an interaction and edit the original message later; the user does not see a loading state */
    DeferredUpdateMessage = 6,
    /** For components, edit the message the component was attached to */
    UpdateMessage = 7
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
    type: string;
    name: string;
    permissions: string;
}
/** @see https://discord.com/developers/docs/resources/guild#guild-member-object */
export interface InteractionGuildMember extends GuildMemberWithUser {
    /** Total permissions of the member in the channel, including overwrites, returned when in the interaction object */
    permissions: string;
}
//# sourceMappingURL=index.d.ts.map