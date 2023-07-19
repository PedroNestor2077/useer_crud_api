import { pino } from "pino";

export default class Logger {
  private static logger = pino();

  static log(message: string) {
    this.logger.info(message);
  }

  static error(message: string) {
    this.logger.error(message);
  }
}
