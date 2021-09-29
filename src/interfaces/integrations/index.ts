import { User } from '../index';

/** https://discord.com/developers/docs/resources/guild#integration-object-integration-structure */
export interface Integration {
    /** Integration Id */
    id: string;
    /** Integration name */
    name: string;
    /** Integration type (twitch, youtube or discord) */
    type: 'twitch' | 'youtube' | 'discord';
    /** Is this integration enabled */
    enabled: boolean;
    /** Is this integration syncing */
    syncing?: boolean;
    /** Role Id that this integration uses for "subscribers" */
    roleId?: string;
    /** Whether emoticons should be synced for this integration (twitch only currently) */
    enableEmoticons?: boolean;
    /** The behavior of expiring subscribers */
    expireBehavior?: IntegrationExpireBehaviors;
    /** The grace period (in days) before expiring subscribers */
    expireGracePeriod?: number;
    /** User for this integration */
    user?: User;
    /** Integration account information */
    account: IntegrationAccount;
    /** When this integration was last synced */
    syncedAt?: string;
    /** How many subscribers this integration has */
    subscriberCount?: number;
    /** Has this integration been revoked */
    revoked?: boolean;
    /** The bot/OAuth2 application for discord integrations */
    application?: IntegrationApplication;
}

/** @see https://discord.com/developers/docs/topics/gateway#guild-integrations-update */
export interface GuildIntegrationsUpdate {
    /** id of the guild whose integrations were updated */
    guild_id: string;
}

/** @see https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure */
export interface IntegrationAccount {
    /** Id of the account */
    id: string;
    /** Name of the account */
    name: string;
}

/** @see https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure */
export interface IntegrationApplication {
    /** The id of the app */
    id: string;
    /** The name of the app */
    name: string;
    /** the icon hash of the app */
    icon: string | null;
    /** The description of the app */
    description: string;
    /** The summary of the app */
    summary: string;
    /** The bot associated with this application */
    bot?: User;
}

/** @see https://github.com/discord/discord-api-docs/blob/master/docs/topics/Gateway.md#integration-create-event-additional-fields */
export interface IntegrationCreateUpdate extends Integration {
    /** Id of the guild */
    guild_id: string;
}

/** @see https://github.com/discord/discord-api-docs/blob/master/docs/topics/Gateway.md#integration-delete-event-fields */
export interface IntegrationDelete {
    /** Integration id */
    id: string;
    /** Id of the guild */
    guild_id: string;
    /** Id of the bot/OAuth2 application for this discord integration */
    application_id?: string;
}

/** @see https://discord.com/developers/docs/resources/guild#integration-object-integration-expire-behaviors */
export enum IntegrationExpireBehaviors {
    RemoveRole,
    Kick,
}
