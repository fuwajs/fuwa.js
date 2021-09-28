import type { Channel } from 'diagnostics_channel';
import type { ResolvedData, CommandOptions, SelectOption, GuildMemberWithUser } from '../DiscordAPI';
import type { Member, User } from '../member';
import type { Message, ComponentType } from '../message';
import type { ApplicationCommandInteractionData } from './ApplicationTypes';

/**
 * @see https://discord.com/developers/docs/interactions/application-commands#application-command-object-application-command-structure
 */
export enum ApplicationCommandType {
    ChatInput = 1,
    User,
    Message,
}

export enum InteractionType {
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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface Interaction<
    T extends InteractionType,
    D extends ApplicationCommandInteractionData | undefined
> {
    /**
     * @description id of the interaction
     */
    id: string;
    /**
     * @description id of the application this interaction is for
     */
    application_id: string;
    /**
     * @description the type of interaction
     */
    type: InteractionType;
    data: InteractionData;
    guild_id?: string;
    channel_id?: string;
    member?: Member;
    user?: User;
    token: string;
    version: 1;
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
    type: InteractionType;
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
