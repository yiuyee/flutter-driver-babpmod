import { FlutterDriver } from '../driver';
import { log } from '../logger';

import { startAndroidSession } from './android';
import { startIOSSession } from './ios';
import { startPureFlutterSession } from './pure_flutter'

// tslint:disable-next-line:variable-name
export const createSession = async function(this: FlutterDriver, caps, sessionId)  {
    try {
      // setup proxies - if platformName is not empty, make it less case sensitive
      if (caps.platformName !== null) {
        const appPlatform = caps.platformName.toLowerCase();
        switch (appPlatform) {
          case `ios`:
            [this.proxydriver, this.socket] = await startIOSSession(caps);
            break;
          case `android`:
            [this.proxydriver, this.socket] = await startAndroidSession(caps);
            break;
        case `NoMatter`:
            [this.proxydriver, this.socket] = await startPureFlutterSession(caps);
          default:
            log.errorAndThrow(
              `Unsupported platformName: ${caps.platformName}`,
            );
        }
      }

      return [sessionId, this.opts];
    } catch (e) {
      await this.deleteSession();
      throw e;
    }
  };


export const deleteSession = async function(this: FlutterDriver) {
    log.debug(`Deleting Flutter Driver session`);

    if (this.proxydriver !== null) {
      await this.proxydriver.deleteSession();
      this.proxydriver = null;
    }
  };
