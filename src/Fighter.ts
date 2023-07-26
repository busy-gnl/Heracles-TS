import Shield from "Shield";
import Weapon from "Weapon";

const MAX_LIFE = 100;
export default class Fighter {
  private name: string;
  private strength: number;
  private defense: number;
  private life: number;
  private weapon: Weapon | null;
  private shield: Shield | null;
  constructor(name: string, strength: number, defense: number) {
    this.name = name;
    this.strength = strength;
    this.defense = defense;
    this.life = MAX_LIFE;
    this.weapon = null;
    this.shield = null;
  }
  // Lancer un combat
  public attack(defender: Fighter) {
    // calculer les points d'attaques
    const attackPoints = this.getRandomInt(this.getDamage());
    // calculer le nombre des dommages
    const damages = Math.max(attackPoints - defender.getDefense(this), 0);
    // calculer les nombres de vies
    defender.life = Math.max(defender.life - damages, 0);
  }

  // Genérer un nombre aléatoire entre 1 et max
  private getRandomInt(max: number): number {
    return 1 + Math.floor(Math.random() * max);
  }

  // Déterminer si un combattant est toujours en vie
  public isAlive(): boolean {
    return this.life > 0;
  }

  // Ajouter une arme au combattant
  public setWeapon(weapon: Weapon): void {
    this.weapon = weapon;
  }

  // Ajouter un bouclier au combattant
  public setShield(shield: Shield): void {
    this.shield = shield;
  }

  // Récupérer les damages
  private getDamage(): number {
    if (this.weapon !== null) {
      return this.strength + this.weapon.getDamage();
    } else {
      return this.strength;
    }
  }

  private getDefense(defender: Fighter): number {
    if (defender.shield !== null) {
      return defender.defense + defender.shield.getProtection();
    } else {
      return defender.defense;
    }
  }
}
