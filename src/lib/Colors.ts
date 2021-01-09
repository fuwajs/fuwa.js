export default {
    /**
     * Generate a hex color string from rgb properties
     * @param r
     * @param g
     * @param b
     */
    rgb(r: number, g: number, b: number): string {
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    },
    mind: '#3EB489',
    white: '#FFFFFF',
    snow: '#FFFAFA',
    aliceBlue: '#f0f8ff', // yo girl
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
    lightGreen: '#5af78e',
    orange: '#ff3403',
    pink: '#ff6ac1',
    yellow: '#f3f99d'

};
