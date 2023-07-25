export default class Weapon {
  private name: string;
  private damage: number;
  constructor(name: string, damage: number = 10) {
    this.name = name;
    this.damage = damage;
  }
  getDamage(): number {
    return this.damage;
  }

  getName(): string {
    return this.name;
  }
}
