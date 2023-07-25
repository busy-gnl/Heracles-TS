"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MAX_LIFE = 100;
class Fighter {
    constructor(name, strength, defense) {
        this.weapon = null;
        this.shield = null;
        this.name = name;
        this.strength = strength;
        this.defense = defense;
        this.life = MAX_LIFE;
    }
    // Lancer un combat
    attack(defender) {
        // calculer les points d'attaques
        const attackPoints = this.getRandomInt(this.getDamage());
        // calculer le nombre des dommages
        const damages = Math.max(attackPoints - defender.getDefense(), 0);
        // calculer les nombres de vies
        defender.life = Math.max(defender.life - damages, 0);
    }
    // Genérer un nombre aléatoire entre 1 et max
    getRandomInt(max) {
        return 1 + Math.floor(Math.random() * max);
    }
    // Déterminer si un combattant est toujours en vie
    isAlive() {
        return this.life > 0;
    }
    // Ajouter une arme au combattant
    setWeapon(weapon) {
        this.weapon = weapon;
    }
    // Ajouter un bouclier au combattant
    setShield(shield) {
        this.shield = shield;
    }
    // Récupérer les damages
    getDamage() {
        if (this.weapon !== null) {
            return this.strength + this.weapon.getDamage();
        }
        else {
            return this.strength;
        }
    }
    getDefense() {
        if (this.shield !== null) {
            return this.defense + this.shield.getProtection();
        }
        else {
            return this.defense;
        }
    }
}
exports.default = Fighter;
