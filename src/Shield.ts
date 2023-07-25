export default class Shield {
  private name: string;
  private protection: number;
  constructor(name: string, protection: number = 10) {
    this.name = name;
    this.protection = protection;
  }
  getProtection(): number {
    return this.protection;
  }

  getName(): string {
    return this.name;
  }
}
