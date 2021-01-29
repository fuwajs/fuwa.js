/* eslint-disable @typescript-eslint/ban-ts-comment */
import _Client from './lib/Client';
import _Embed from './lib/discord/Embed';
import _Colors from './lib/Colors';

// Types
// TODO: finish exporting types
import _Request from'./lib/Request';
import _Response from './lib/Response';
export { commandOptions, commandCallback } from './lib/Command';

// @ts-ignore
if(typeof window !== undefined) {
    // For browser support
    // @ts-ignore
    window.Colors = _Colors;
    // @ts-ignore
    window.Colours = _Colors;
    // @ts-ignore
    window.Client = _Client;
    // @ts-ignore
    window.Embed = _Embed;
}
export const Colors = _Colors;
export const Colorus = _Colors;
export const Client = _Client;
export const Embed = _Embed;

// Export types
export let Request: typeof _Request;
export let Response: typeof _Response;


