/**
 *  Allows easy way to add a prop to a base object when needing to use complicated getters solution.
 *  @internal
 */

import Globs from './Global';

// deno-lint-ignore no-explicit-any
export function createNewProp(value: any): PropertyDescriptor {
    return { configurable: true, enumerable: true, writable: true, value };
}

export function arrayToMap<K extends keyof T, T>(key: K, arr: T[]): Map<K, T> {
    const entries: [K, T][] = arr.map(a => [a[key], a]) as any;
    return new Map(entries);
}

export function arrayToObject<K extends keyof T, T>(key: K, arr: T[]): { [key: string]: K } {
    const entries = arr.map(a => [a[key], a]) as any;
    return Object.fromEntries(entries);
}

export function setCachePromise<T>(key: string) {
    const cache = Globs.cache;
    return (data: T) => {
        cache.set(key, data);
        return data;
    };
}

export function enumPropFinder<K>(key: any, obj: any): keyof K {
    return (Object.keys(obj).find(k => key === obj[k]) ?? '') as keyof K;
}

export function isBrowser() {
    try {
        // @ts-ignore
        window.WebSocket;
        return true;
    } catch {
        return false;
    }
}

/**
 * Pauses a function for x amount of time.
 * @param ms
 * @returns an interval of time in ms
 * @internal
 */
export function delay(ms: number): Promise<void> {
    return new Promise(res =>
        setTimeout(() => {
            res();
        }, ms)
    );
}

/**
 *  Format url type
 *  @internal
 */
export const formatImageURL = (hash: string, size: ImageSize = 128, format?: ImageFormat) => {
    return `${hash}.${format || (hash.includes('/a_') ? 'gif' : 'jpg')}?size=${size}`;
};

/**
 *  @see https://discord.com/developers/docs/reference#image-formatting
 *  @internal
 */
export type ImageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;

/**
 * @see https://discord.com/developers/docs/reference#image-formatting
 * @internal
 *  */
export type ImageFormat = 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif';

/**
 * Typescript is not so good as we developers so we need this little utility function to help it out
 * Taken from [this](https://fettblog.eu/typescript-hasownproperty/) url.
 *  TS safe way to check if a property exists in an object
 *  @internal
 */
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
 *  @internal
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

export const HttpErrorChecker = <T extends { message: string; code: number; [key: string]: any }>(
    data: T
): T | false => (data.message && data.code ? false : data);

export type UpperCaseCharacters =
    | 'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'W'
    | 'X'
    | 'Y'
    | 'Z';

export type WordSeparators = '-' | '_' | ' ';

export type StringDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type Merge<A, B> = {
    [K in keyof A]: K extends keyof B ? B[K] : A[K];
} & B;

export type Split<S extends string, D extends string> = string extends S
    ? string[]
    : S extends ''
    ? []
    : S extends `${infer T}${D}${infer U}`
    ? [T, ...Split<U, D>]
    : [S];

export type SplitIncludingDelimiters<Source extends string, Delimiter extends string> = Source extends ''
    ? []
    : Source extends `${infer FirstPart}${Delimiter}${infer SecondPart}`
    ? Source extends `${FirstPart}${infer UsedDelimiter}${SecondPart}`
        ? UsedDelimiter extends Delimiter
            ? Source extends `${infer FirstPart}${UsedDelimiter}${infer SecondPart}`
                ? [
                      ...SplitIncludingDelimiters<FirstPart, Delimiter>,
                      UsedDelimiter,
                      ...SplitIncludingDelimiters<SecondPart, Delimiter>
                  ]
                : never
            : never
        : never
    : [Source];
type InnerCamelCaseStringArray<Parts extends any[], PreviousPart> = Parts extends [
    `${infer FirstPart}`,
    ...infer RemainingParts
]
    ? FirstPart extends undefined
        ? ''
        : FirstPart extends ''
        ? InnerCamelCaseStringArray<RemainingParts, PreviousPart>
        : `${PreviousPart extends '' ? FirstPart : Capitalize<FirstPart>}${InnerCamelCaseStringArray<
              RemainingParts,
              FirstPart
          >}`
    : '';
type CamelCaseStringArray<Parts extends string[]> = Parts extends [
    `${infer FirstPart}`,
    ...infer RemainingParts
]
    ? Uncapitalize<`${FirstPart}${InnerCamelCaseStringArray<RemainingParts, FirstPart>}`>
    : never;
type StringPartToDelimiterCase<
    StringPart extends string,
    UsedWordSeparators extends string,
    UsedUpperCaseCharacters extends string,
    Delimiter extends string
> = StringPart extends UsedWordSeparators
    ? Delimiter
    : StringPart extends UsedUpperCaseCharacters
    ? `${Delimiter}${Lowercase<StringPart>}`
    : StringPart;
type StringArrayToDelimiterCase<
    Parts extends any[],
    UsedWordSeparators extends string,
    UsedUpperCaseCharacters extends string,
    Delimiter extends string
> = Parts extends [`${infer FirstPart}`, ...infer RemainingParts]
    ? `${StringPartToDelimiterCase<
          FirstPart,
          UsedWordSeparators,
          UsedUpperCaseCharacters,
          Delimiter
      >}${StringArrayToDelimiterCase<RemainingParts, UsedWordSeparators, UsedUpperCaseCharacters, Delimiter>}`
    : '';

export type DelimiterCase<Value, Delimiter extends string> = Value extends string
    ? StringArrayToDelimiterCase<
          SplitIncludingDelimiters<Value, WordSeparators | UpperCaseCharacters>,
          WordSeparators,
          UpperCaseCharacters,
          Delimiter
      >
    : Value;
/* eslint-disable @typescript-eslint/ban-types */
export type DelimiterCasedProperties<Value, Delimiter extends string> = Value extends Function
    ? Value
    : Value extends Array<infer U>
    ? Value
    : { [K in keyof Value as DelimiterCase<K, Delimiter>]: Value[K] };
/* eslint-disable @typescript-eslint/ban-types */
export type DelimiterCasedPropertiesDeep<Value, Delimiter extends string> = Value extends Function
    ? Value
    : Value extends Array<infer U>
    ? Array<DelimiterCasedPropertiesDeep<U, Delimiter>>
    : Value extends Set<infer U>
    ? Set<DelimiterCasedPropertiesDeep<U, Delimiter>>
    : {
          [K in keyof Value as DelimiterCase<K, Delimiter>]: DelimiterCasedPropertiesDeep<
              Value[K],
              Delimiter
          >;
      };

export type SnakeCase<Value> = DelimiterCase<Value, '_'>;

export type CamelCase<K> = K extends string ? CamelCaseStringArray<Split<K, WordSeparators>> : K;

export type SnakeCasedProperties<Value> = DelimiterCasedProperties<Value, '_'>;
/* eslint-disable @typescript-eslint/ban-types */
export type CamelCasedProperties<Value> = Value extends Function
    ? Value
    : Value extends Array<infer U>
    ? Value
    : {
          [K in keyof Value as CamelCase<K>]: Value[K];
      };

export type SnakeCasedPropertiesDeep<Value> = DelimiterCasedPropertiesDeep<Value, '_'>;
/* eslint-disable @typescript-eslint/ban-types */
export type CamelCasedPropertiesDeep<Value> = Value extends Function
    ? Value
    : Value extends Array<infer U>
    ? Array<CamelCasedPropertiesDeep<U>>
    : Value extends Set<infer U>
    ? Set<CamelCasedPropertiesDeep<U>>
    : {
          [K in keyof Value as CamelCase<K>]: CamelCasedPropertiesDeep<Value[K]>;
      };

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> & U[keyof U];

export type MakeRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };
