/******************************************************************************
 * Error classes
 * @file Errors.ts
 *****************************************************************************/
export declare class InvalidToken extends Error {
    name: string;
    constructor(msg: string);
}
export declare class InvalidPrefix extends Error {
    name: string;
    constructor(msg: string);
}
export declare class CommandParsing extends Error {
    name: string;
    constructor(msg: string);
}
