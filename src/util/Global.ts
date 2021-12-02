/**
 * @description Global Globs
 * @module
 * @internal
 */

import { Cache } from '../index';

const Globs = {
    token: '',
    sessionId: '',
    appId: '',
    client: '' as any,
    cache: {} as Cache,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    version: require('../../../package.json').version,
};

export default Globs;
