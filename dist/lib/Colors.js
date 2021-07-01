"use strict";
/******************************************************************************
 * @file src/lib/Colors.ts
 * @fileoverview Provides the rgb function, and colors.
 *****************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    /**
     * Generate a hex color number from rgb properties
     * @param r
     * @param g
     * @param b
     */
    rgb(r, g, b) {
        return (r << 16) + (g << 8) + b;
    },
    mind: 0x3eb489,
    white: 0xfffff,
    snow: 0xfffafa,
    aliceBlue: 0xf0f8ff,
    antiqueWhite: 0xfaebd7,
    aqua: 0x00ffff,
    aquaMarine: 0x7fffd4,
    azure: 0xf0ffff,
    beige: 0xf5f5dc,
    bisque: 0xffe4c4,
    black: 0x000000,
    blanchedAlmond: 0xffebcd,
    blue: 0x57c7ff,
    blueViolet: 0x8a2be2,
    brown: 0xa52a2a,
    lightGreen: 0x5af78e,
    orange: 0xff3403,
    pink: 0xff6ac1,
    red: 0xff5c57,
    yellow: 0xf3f99d
};
