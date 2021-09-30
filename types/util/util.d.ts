/** Allows easy way to add a prop to a base object when needing to use complicated getters solution. */
export declare function createNewProp(value: any): PropertyDescriptor;
/**
 * Pauses a function for x amount of time.
 * @param ms
 * @returns an interval of time in ms
 */
export declare function delay(ms: number): Promise<void>;
/** Format url type  */
export declare const formatImageURL: (url: string, size?: ImageSize, format?: ImageFormat) => string;
/** @see https://discord.com/developers/docs/reference#image-formatting */
export declare type ImageSize = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;
/** @see https://discord.com/developers/docs/reference#image-formatting */
export declare type ImageFormat = 'jpg' | 'jpeg' | 'png' | 'webp' | 'gif';
/** TS safe way to check if a property exists in an object */
export declare function hasOwnProperty<T extends Record<string, unknown>, Y extends PropertyKey = string>(obj: T, prop: Y): obj is T & Record<Y, unknown>;
/**
 * Converts emoji to string id.
 * @param emoji discord emoji
 * @returns string of emoji
 */
export declare function makeEmojiFromString(emoji?: string | {
    id?: string | undefined;
    name?: string | undefined;
    animated?: boolean | undefined;
}): {
    id?: string | undefined;
    name?: string | undefined;
    animated?: boolean | undefined;
};
export declare type UpperCaseCharacters = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K' | 'L' | 'M' | 'N' | 'O' | 'P' | 'Q' | 'R' | 'S' | 'T' | 'U' | 'V' | 'W' | 'X' | 'Y' | 'Z';
export declare type WordSeparators = '-' | '_' | ' ';
export declare type StringDigit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export declare type Split<S extends string, D extends string> = string extends S ? string[] : S extends '' ? [] : S extends `${infer T}${D}${infer U}` ? [T, ...Split<U, D>] : [S];
export declare type SplitIncludingDelimiters<Source extends string, Delimiter extends string> = Source extends '' ? [] : Source extends `${infer FirstPart}${Delimiter}${infer SecondPart}` ? Source extends `${FirstPart}${infer UsedDelimiter}${SecondPart}` ? UsedDelimiter extends Delimiter ? Source extends `${infer FirstPart}${UsedDelimiter}${infer SecondPart}` ? [
    ...SplitIncludingDelimiters<FirstPart, Delimiter>,
    UsedDelimiter,
    ...SplitIncludingDelimiters<SecondPart, Delimiter>
] : never : never : never : [Source];
declare type InnerCamelCaseStringArray<Parts extends any[], PreviousPart> = Parts extends [
    `${infer FirstPart}`,
    ...infer RemainingParts
] ? FirstPart extends undefined ? '' : FirstPart extends '' ? InnerCamelCaseStringArray<RemainingParts, PreviousPart> : `${PreviousPart extends '' ? FirstPart : Capitalize<FirstPart>}${InnerCamelCaseStringArray<RemainingParts, FirstPart>}` : '';
declare type CamelCaseStringArray<Parts extends string[]> = Parts extends [
    `${infer FirstPart}`,
    ...infer RemainingParts
] ? Uncapitalize<`${FirstPart}${InnerCamelCaseStringArray<RemainingParts, FirstPart>}`> : never;
declare type StringPartToDelimiterCase<StringPart extends string, UsedWordSeparators extends string, UsedUpperCaseCharacters extends string, Delimiter extends string> = StringPart extends UsedWordSeparators ? Delimiter : StringPart extends UsedUpperCaseCharacters ? `${Delimiter}${Lowercase<StringPart>}` : StringPart;
declare type StringArrayToDelimiterCase<Parts extends any[], UsedWordSeparators extends string, UsedUpperCaseCharacters extends string, Delimiter extends string> = Parts extends [`${infer FirstPart}`, ...infer RemainingParts] ? `${StringPartToDelimiterCase<FirstPart, UsedWordSeparators, UsedUpperCaseCharacters, Delimiter>}${StringArrayToDelimiterCase<RemainingParts, UsedWordSeparators, UsedUpperCaseCharacters, Delimiter>}` : '';
export declare type DelimiterCase<Value, Delimiter extends string> = Value extends string ? StringArrayToDelimiterCase<SplitIncludingDelimiters<Value, WordSeparators | UpperCaseCharacters>, WordSeparators, UpperCaseCharacters, Delimiter> : Value;
export declare type DelimiterCasedProperties<Value, Delimiter extends string> = Value extends Function ? Value : Value extends Array<infer U> ? Value : {
    [K in keyof Value as DelimiterCase<K, Delimiter>]: Value[K];
};
export declare type DelimiterCasedPropertiesDeep<Value, Delimiter extends string> = Value extends Function ? Value : Value extends Array<infer U> ? Array<DelimiterCasedPropertiesDeep<U, Delimiter>> : Value extends Set<infer U> ? Set<DelimiterCasedPropertiesDeep<U, Delimiter>> : {
    [K in keyof Value as DelimiterCase<K, Delimiter>]: DelimiterCasedPropertiesDeep<Value[K], Delimiter>;
};
export declare type SnakeCase<Value> = DelimiterCase<Value, '_'>;
export declare type CamelCase<K> = K extends string ? CamelCaseStringArray<Split<K, WordSeparators>> : K;
export declare type SnakeCasedProperties<Value> = DelimiterCasedProperties<Value, '_'>;
export declare type CamelCasedProperties<Value> = Value extends Function ? Value : Value extends Array<infer U> ? Value : {
    [K in keyof Value as CamelCase<K>]: Value[K];
};
export declare type SnakeCasedPropertiesDeep<Value> = DelimiterCasedPropertiesDeep<Value, '_'>;
export declare type CamelCasedPropertiesDeep<Value> = Value extends Function ? Value : Value extends Array<infer U> ? Array<CamelCasedPropertiesDeep<U>> : Value extends Set<infer U> ? Set<CamelCasedPropertiesDeep<U>> : {
    [K in keyof Value as CamelCase<K>]: CamelCasedPropertiesDeep<Value[K]>;
};
export declare type AtLeastOne<T, U = {
    [K in keyof T]: Pick<T, K>;
}> = Partial<T> & U[keyof U];
export declare type MakeRequired<T, K extends keyof T> = T & {
    [P in K]-?: T[P];
};
export {};
//# sourceMappingURL=util.d.ts.map