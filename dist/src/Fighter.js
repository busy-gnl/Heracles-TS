"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fighter = void 0;
/* Fighter class definition */
const MAX_LIFE = 100;
class Fighter {
    constructor(name, strength, dexterity) {
        this.life = MAX_LIFE;
        this.name = name;
        this.strength = strength;
        this.dexterity = dexterity;
    }
    attack(target) {
        let damage = Math.floor(Math.random() * this.strength) - target.dexterity;
        if (damage < 0) {
            damage = 0;
            console.log(`${this.name} a raté son attaque`);
        }
        target.life -= damage;
        if (target.life < 0) {
            target.life = 0;
            console.log(`${target.name} est mort, ${this.name} a gagné`);
        }
        console.log(`${this.name} attaque ${target.name} et lui inflige ${damage} points de dégâts.`);
        console.log(`${target.name} a maintenant ${target.life} points de vie 💙.`);
    }
}
exports.Fighter = Fighter;
module.exports = Fighter;
