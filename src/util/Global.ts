/******************************************************************************
 * @file src/util/Globals.ts
 * @fileoverview Global util Classes
 *****************************************************************************/

const Globs = {
    token: '',
    sessionId: '',
    appId: '',
};

export default Globs;

export class InvalidToken extends Error {
    name = 'InvalidTokenError';
    constructor(msg: string) {
        super(msg);
    }
}
