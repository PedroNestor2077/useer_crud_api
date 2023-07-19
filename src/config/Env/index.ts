export default class Env {
  public static getNumeric(name: string): number {
    const value = Number(process.env[name]);
    if (!value) throw new Error(`Missing environment variable: ${name}`);
    return value;
  }

  public static getString(name: string): string {
    const value = process.env[name];
    if (!value) throw new Error(`Missing environment variable: ${name}`);
    return value;
  }
}
