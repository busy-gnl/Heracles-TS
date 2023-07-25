"use strict";
// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require('./src/Fighter.js');
const Heracles = new Fighter('Heracles 🧔', 50, 6);
const NemeanLion = new Fighter('Nemean Lion 🦁', 11, 13);
console.log('Heracles 💙 :>> ', Heracles.life);
console.log('NemeanLion 💙 :>> ', NemeanLion.life);
let round = 0;
while (Heracles.life > 0 || NemeanLion.life > 0) {
    round++;
    console.log(`Round #${round} : `);
    Heracles.attack(NemeanLion);
    NemeanLion.attack(Heracles);
    if (NemeanLion.life <= 0 || Heracles.life <= 0) {
        console.log("Combat terminé");
        round = 0;
        break;
    }
}
