/* eslint-disable @typescript-eslint/ban-ts-comment */
import _Client from './lib/Client';
import _Embed from './lib/discord/Embed';
import _Colors from './lib/Colors';

// Types
import _Request from './lib/Request';
import _Response from './lib/Response';
export { commandOptions, CommandCallback as commandCallback } from './lib/Command';

import {
    PermissionFlags,
    GatewayIntents,
    MessageType,
    ActivityType,
    ChannelType,
    PremiumTypes,
    InviteTargets,
    ApplicationCommandOptionType,
    UserFlags,
    AuditLogEvents,
    ApplicationCommandType,
    InteractionType,
} from './lib/_DiscordAPI';

export const Enums = {
    PermissionFlags,
    GatewayIntents,
    MessageType,
    AuditLogEvents,
    InteractionType,
    ActivityType,
    ChannelType,
    PremiumTypes,
    InviteTargets,
    ApplicationCommandOptionType,
    ApplicationCommandType,
    UserFlags,
};

export const Colors = _Colors;
export const Colours = _Colors;
export const Client = _Client;
export const Embed = _Embed;

// Export types
export let Request: typeof _Request;
export let Response: typeof _Response;
