export class Logger {
    log(message: string, data?: any): void {
      if (data !== undefined) {
        console.log(`[LOG]: ${message}`, data);
      } else {
        console.log(`[LOG]: ${message}`);
      }
    }
  }
  