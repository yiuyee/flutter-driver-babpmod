export interface IDesiredCapConstraints {
  deviceName?: string;
  platformName: {
    presence: boolean;
    isString: boolean;
    inclusionCaseInsensitive: string[];
  };
  automationName: {
    presence: boolean;
    isString: boolean;
    inclusionCaseInsensitive: string[];
  };
  app: any;
  avd: any;
  udid: any;
  retryBackoffTime: any;
  maxRetryCount: any;
  flutterDriverAdvertise: any;
}

export const desiredCapConstraints: IDesiredCapConstraints = {
  app: {
    isString: true,
  },
  automationName: {
    inclusionCaseInsensitive: [`Flutter`],
    isString: true,
    presence: true,
  },
  avd: {
    isString: true,
  },
  maxRetryCount: {
    isNumber: true,
  },
  platformName: {
    inclusionCaseInsensitive: [
      `iOS`,
      `Android`,
      `NoMatter`
    ],
    isString: true,
    presence: true,
  },
  retryBackoffTime: {
    isNumber: true,
  },
  udid: {
    isString: true,
  },
  flutterDriverAdvertise: {
    isString: true,
  },
};
