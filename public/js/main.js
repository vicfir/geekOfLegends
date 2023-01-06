//import * as perso from './module/class.js';
import * as instance from './module/instances.js';
import * as funct from './module/function.js';

//boss
console.log(instance.boss);
// console.log(instance.sauron);
// console.log(instance.chronos);
// console.log(instance.lilith);

//hero
console.log(instance.guerrier);
console.log(instance.mage);
console.log(instance.archer);

let team = [instance.guerrier, instance.mage, instance.archer];

//Boucle generale
while (instance.boss.pv > 0) {
    //Chacque perso tape a son tour
    team.forEach(element => {
        //tant que le boss est en vie
        if (instance.boss.pv > 0) {
            console.log(`${element.nom} frappe ${instance.boss.nom}`);
            // instance.boss.pv -= element.pa;
            //energie/conso perso
            switch (element) {
                case instance.guerrier:
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
                    break;

                case instance.mage:
                    //attaque si assez de mana
                    if (element.mana < 2) {
                        console.log(`${element.nom} n'as plus assez de mana pour attaquer, il doit attendre le tour suivant`);
                        element.mana = 7;
                    } else {
                        instance.boss.pv -= element.pa;
                        element.mana -= 2 ;
                        console.log(`Le mana de ${element.nom} est passé à ${element.mana}`);
                    }
                    
                    break;

                case instance.archer:
                    instance.boss.pv -= element.pa;
                    element.fleche -- ;
                    console.log(`Il reste ${element.fleche} à ${element.nom}`);
                    break;
            
                default:
                    console.log("error");
                    break;
            }
            //mort ou pv restant
            if (instance.boss.pv <= 0) {
                console.log(`${instance.boss.nom} est MORT`);
            } else {
                console.log(`${instance.boss.nom} a ${instance.boss.pv}PV`);
            }
        }

        console.log("--------------------");
    });
    
    //Le boss tape un perso aleatoire
    if (instance.boss.pv > 0) {
        let heroAleatoire = funct.randArr(team);
        console.log(`${heroAleatoire.nom} va etre attaqué!`);
        heroAleatoire.pv -= instance.boss.pa;
        console.log(`Il reste ${heroAleatoire.pv}PV a ${heroAleatoire.nom}`);
    }
    console.log('********************************************');
}