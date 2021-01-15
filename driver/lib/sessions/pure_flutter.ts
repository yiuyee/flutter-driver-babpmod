// @ts-ignore

import { log } from '../logger';
import { connectSocket} from './observatory';

const setupNewFlutterDriver = async (caps)  => {
    const capsCopy = Object.assign({}, caps, { newCommandTimeout: 0 });
    return capsCopy;
};

export const startPureFlutterSession = async (caps) => {
    const wsAddr = caps.flutterDriverAdvertise.replace('^http', 'ws');
    const observatoryWsUri = caps.flutterDriverAdvertise;
    return Promise.all([
        null,
        connectSocket(observatoryWsUri, caps.retryBackoffTime, caps.maxRetryCount),
    ]);
};
