export class InvalidToken extends Error {
    name = 'InvalidTokenError';
    constructor(msg: string) { super(msg); }
}
export class InvalidPrefix extends Error {
    name = 'InvalidPrefix';
    constructor(msg: string) { super(msg); }
}
export class CommandParsing extends Error {
    name = 'CommandParsingError';
    constructor(msg: string) { super(msg); }
}