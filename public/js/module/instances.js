import * as perso from './class.js';
import * as funct from './function.js';

//boss
export let boss = funct.randArr([
    new perso.Boss('Sauron', 400, 10),
    new perso.Boss('Chronos', 200, 10),
    new perso.Boss('Lilith', 300, 10)
]);

//hero
export let guerrier = new perso.Hero('Boromir', 60, 10);
guerrier.rage = 0;

export let mage = new perso.Hero('Gandalf', 30, 20);
mage.mana = funct.randArr([7,9,11]);

export let archer = new perso.Hero('Legolas', 40, 15);
archer.fleche = funct.randArr([7, 8 , 9 ,10 ,11]);