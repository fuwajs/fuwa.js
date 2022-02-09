/**
 * Global Globs
 * @module
 * @internal
 */

import type { Cache, Client } from '../index';

const Globs = {
    token: '',
    sessionId: '',
    appId: '',
    client: '' as any as Client,
    cache: {} as Cache,
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    version: require('../../../package.json').version,
};

export default Globs;
