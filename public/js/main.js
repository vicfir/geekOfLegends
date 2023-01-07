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
    

    if (instance.boss.pv > 0) {
         // suivi pv
        console.log(`${instance.guerrier.nom} PV:${instance.guerrier.pv} Rage:${instance.guerrier.rage} | ${instance.mage.nom} PV:${instance.mage.pv} Mana:${instance.mage.mana} | ${instance.archer.nom} PV:${instance.archer.pv} Flèches:${instance.archer.fleche} || ${instance.boss.nom} PV:${instance.boss.pv}`);
        console.log("");

        //Chacque perso tape a son tour
        team.forEach(element => {
            //tant que le boss est en vie
            if (instance.boss.pv > 0) {
                console.log(`Action : ${element.nom} frappe ${instance.boss.nom} -> ${instance.boss.nom} ${instance.boss.pv}PV - ${element.pa}PV`);
                //attaque hero
                switch (element) {
                    case instance.guerrier:
                        //attaque guerier
                        funct.bastonGuerrier(element);
                        break;

                    case instance.mage:
                        //attaque mage
                        funct.bastonMage(element);                
                        break;

                    case instance.archer:
                        //ataque archer
                        funct.bastonArcher(element)
                        break;
                
                    default:
                        console.log("error");
                        break;
                }
                //VICTOIRE
                if (instance.boss.pv <= 0) {
                    console.log("");
                    console.log(`!!! ${instance.boss.nom} est MORT - YOU WIN !!!`);
                }

                console.log("");
            }
        });

        
    }   
    
    //Le boss tape un perso aleatoire
    if (instance.boss.pv > 0) {
        funct.bastonBoss(team);
    }

    //DEFAITE
    if (team.length == 0) {
        //stop boucle infini
        instance.boss.pv = 0;
        console.log("");
        console.log("!!! Toute votre equipe est MORTE - YOU LOSE !!!");
        console.log("");
    }

    console.log("");
    console.log('********************************************');
    console.log("");
}
