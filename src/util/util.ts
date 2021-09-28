/**
 * Pauses a function for x amount of time.
 * @param ms
 * @returns an interval of time in ms
 */
export function delay(ms: number): Promise<void> {
    return new Promise(
        (res): ReturnType<typeof setTimeout> =>
            setTimeout((): void => {
                res();
            }, ms)
    );
}

/** Format url type  */
export const formatImageURL = (url: string, size: ImageSize = 128, format?: ImageFormat) => {
    return `${url}.${format || (url.includes('/a_') ? 'gif' : 'jpg')}?size=${size}`;
};

/** @see https://discord.com/developers/docs/reference#image-formatting */
export type ImageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;

/** @see https://discord.com/developers/docs/reference#image-formatting */
export type ImageFormat = 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif';

// Typescript is not so good as we developers so we need this little utility function to help it out
// Taken from https://fettblog.eu/typescript-hasownproperty/
/** TS save way to check if a property exists in an object */
export function hasOwnProperty<T extends Record<string, unknown>, Y extends PropertyKey = string>(
    obj: T,
    prop: Y
): obj is T & Record<Y, unknown> {
    // deno-lint-ignore no-prototype-builtins
    return obj.hasOwnProperty(prop);
}

/**
 * Converts emoji to string id.
 * @param emoji discord emoji
 * @returns string of emoji
 */
export function makeEmojiFromString(
    emoji?:
        | string
        | {
              id?: string | undefined;
              name?: string | undefined;
              animated?: boolean | undefined;
          }
) {
    if (typeof emoji !== 'string') return emoji;

    // A snowflake id was provided
    if (/^[0-9]+$/.test(emoji)) {
        emoji = {
            id: emoji,
        };
    } else {
        // A unicode emoji was provided
        emoji = {
            name: emoji,
        };
    }

    return emoji;
}
