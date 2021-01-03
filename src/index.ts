import _Client from './lib/Client';
import _User from './lib/User';
import _Embed from './lib/Embed';
export const Client = _Client;
export const User = _User;
export const Embed = _Embed;
export const Colors = {
    rgb(r: number, g: number, b: number) {
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    },
    mind: '#3EB489',
    white: '#FFFFFF',
    snow: '#FFFAFA',
    aliceBlue: '#f0f8ff',
    antiqueWhite: '#faebd7',
    aqua: '#00ffff',
    aquaMarine: '#7fffd4',
    azure: '#f0ffff',
    beige: '#f5f5dc',
    bisque: '#ffe4c4',
    black: '#000000',
    blanchedAlmond: '#ffebcd',
    blue: '#0000ff',
    blueViolet: '#8a2be2',
    brown: '#a52a2a',
};
