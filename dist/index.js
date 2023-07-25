"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Weapon_1 = __importDefault(require("./src/Weapon"));
const Fighter_1 = __importDefault(require("./src/Fighter"));
const Shield_1 = __importDefault(require("./src/Shield"));
// instancier la class Fighter pour deux players
const heracles = new Fighter_1.default(`🧔 Heracles`, 20, 6);
//const nemean = new Fighter(`🦁 Nemean Lion`, 11, 13);
const sanglier = new Fighter_1.default(`🐗 Sanglier d'Erymanthe`, 30, 16);
const épée = new Weapon_1.default(`épée`, 10);
const bouclier = new Shield_1.default(`bouclier`, 10);
heracles.setWeapon(épée);
heracles.setShield(bouclier);
// afficher le resultat dans la console
const roundDisplay = (fighter1, fighter2) => {
    return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};
// checker les status des players si winner ou loser
const score = (fighter1, fighter2) => {
    return fighter1.isAlive()
        ? {
            winner: fighter1,
            loser: fighter2,
        }
        : {
            winner: fighter2,
            loser: fighter1,
        };
};
for (let round = 0; heracles.isAlive() && sanglier.isAlive(); round++) {
    console.log(`🕛 Round #${round}`);
    heracles.attack(sanglier);
    console.log(roundDisplay(heracles, sanglier));
    sanglier.attack(heracles);
    console.log(roundDisplay(sanglier, heracles));
}
// let round = 0;
// while (heracles.isAlive() && nemean.isAlive()) {
//   console.log(`🕛 Round #${round}`);
//   heracles.attack(nemean);
//   console.log(roundDisplay(heracles, nemean));
//   nemean.attack(heracles);
//   console.log(roundDisplay(nemean, heracles));
//   round++;
// }
const result = score(heracles, sanglier);
// afficher le resultat du combat
console.log(`💀 ${result.loser.name} is dead`);
console.log(`🏆 ${result.winner.name} wins (💙 ${result.winner.life} )`);
