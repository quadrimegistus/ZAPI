import { dotenv, Application } from '.';

class Locals {
  public static config(): any {
    dotenv.config();
    const environment = process.env.NODE_ENV;
    const port = process.env.REDFISH_PORT;
    const appUri = process.env.REDFISH_URI;
    const callEmulator = process.env.CALL_EMULATOR;
    const emulatorUri = process.env.EMULATOR_URI;
    const apiVersion = process.env.REDFISH_VERSION;
    const isCORSEnabled = process.env.CORS_ENABLED;
    const apiPrefix = process.env.REDFISH_PREFIX;

    return {
      environment,
      port,
      appUri,
      callEmulator,
      emulatorUri,
      apiVersion,
      isCORSEnabled,
      apiPrefix
    };
  }

  public static init(_express: Application): Application {
    _express.locals.app = this.config();
    return _express;
  }
}

export default Locals;
