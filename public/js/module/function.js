import * as instance from './instances.js';

export function randArr(array) {
    let rand = Math.random()*array.length | 0;
    let randValue = array[rand];
    return randValue;
}

export function bastonGuerrier(element) {
    instance.boss.pv -= element.pa;
    if (element.rage <= 3) {
        element.rage ++ ;
        //bonus attaque
        if(element.rage >=4) {
            element.pa *= 1.25;
            console.log(`La rage de ${element.nom} est passée à ${element.rage}, il passe en Berserk, il aura ${element.pa} d'attaque pour le prochain tour`);
            element.rage = 0;
        } else {
            element.pa = 10;
            console.log(`La rage de ${element.nom} est passée à ${element.rage}`);
        }                
    } 
}

export function bastonMage(element) {
    if (element.mana < 2) {
        console.log(`${element.nom} n'as plus assez de mana pour attaquer, il doit attendre le tour suivant`);
        element.mana = 7;
    } else {
        instance.boss.pv -= element.pa;
        element.mana -= 2 ;
        console.log(`Le mana de ${element.nom} est passé à ${element.mana}`);
    }   
}

export function bastonArcher(element){
    if (element.fleche < 2) {
        console.log(`${element.nom} n'as plus assez de flèches, il doit attendre le tour suivant`);
        element.fleche = 6;
    }else {
        element.fleche -= 2;
        instance.boss.pv -= element.pa;
        console.log(`Il reste ${element.fleche} flèches à ${element.nom}`);
        element.fleche ++;
    }
}