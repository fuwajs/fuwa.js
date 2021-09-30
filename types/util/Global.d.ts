/******************************************************************************
 * @file src/util/Globals.ts
 * @fileoverview Global util Classes
 *****************************************************************************/
declare const Globs: {
    token: string;
    sessionId: string;
    appId: string;
};
export default Globs;
export declare class InvalidToken extends Error {
    name: string;
    constructor(msg: string);
}
//# sourceMappingURL=Global.d.ts.map