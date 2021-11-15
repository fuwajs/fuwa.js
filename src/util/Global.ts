/******************************************************************************
 * @file src/util/Globals.ts
 * @fileoverview Global util Classes
 *****************************************************************************/

import { Cache } from '../index';

const Globs = {
    token: '',
    sessionId: '',
    appId: '',
    client: '' as any,
    cache: {} as Cache,
};

export default Globs;

export class InvalidToken extends Error {
    name = 'InvalidTokenError';
    constructor(msg: string) {
        super(msg);
    }
}
