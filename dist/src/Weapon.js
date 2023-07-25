"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Weapon {
    constructor(name, damage) {
        this.damage = 10;
        this.name = name;
        this.damage = damage;
    }
    getDamage() {
        return this.damage;
    }
    getName() {
        return this.name;
    }
}
exports.default = Weapon;
