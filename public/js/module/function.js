import * as instance from './instances.js';

export function randArr(array) {
    let rand = Math.random()*array.length | 0;
    let randValue = array[rand];
    return randValue;
}

//attaque guerrier
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

//attaque mage
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

//attaque archer
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

//attaque boss
export function bastonBoss(element){
    let heroAleatoire = randArr(element);
    let cimptiere = [];
    console.log(`Action : ${instance.boss.nom} frappe ${heroAleatoire.nom} -> ${heroAleatoire.pv}PV - ${instance.boss.pa}PV`);
    heroAleatoire.pv -= instance.boss.pa;
    console.log(`Il reste ${heroAleatoire.pv}PV a ${heroAleatoire.nom}`);
    //Defaite si tout le monde mort
    if (heroAleatoire.pv <= 0) {
        cimptiere = element.splice(element.indexOf(heroAleatoire), 1);
    }
    
}