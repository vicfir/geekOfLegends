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

let pvBossBase = instance.boss.pv;

let posture;

let enigme;

//Boucle generale
while (instance.boss.pv > 0 && team.length != 0) {

    if (instance.boss.pv > 0) {

         // suivi pv
        console.log(`${instance.guerrier.nom} PV:${instance.guerrier.pv} Rage:${instance.guerrier.rage} | ${instance.mage.nom} PV:${instance.mage.pv} Mana:${instance.mage.mana} | ${instance.archer.nom} PV:${instance.archer.pv} Flèches:${instance.archer.fleche} || ${instance.boss.nom} PV:${instance.boss.pv}`);
        console.log(".");

        //choix posture
        posture = prompt("Quelle posture voulez vous choisir pour ce tour : defense, attaque, normal");

        //Chacque perso tape a son tour
        team.forEach(element => {

            //actifer posture combat
            if(posture == "defense" ) {
                console.log("Posture defense");
                element.defense("start");
            } else if (posture == "attaque") {
                console.log("Posture attaque");
                element.attaque("start");
            } else if (posture == "normal") {
                console.log("Posture normal");
            } else {
                console.log("Error posture combat");
            }
            
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
                // //lancement enigme boss -20%pv
                // if (instance.boss.pv <= pvBossBase/5){
                //     // console.log(enigme);
                //     instance.boss.enigme(team, enigme);
                //     if (instance.boss.enigme(team, enigme)) {
                //         team = [];
                //     }
                //     console.log(instance.boss.enigme);
                // }
                //VICTOIRE
                if (instance.boss.pv <= 0) {
                    console.log(".");
                    console.log(`!!! ${instance.boss.nom} est MORT - YOU WIN !!!`);
                }

                console.log(".");
            }

        });

    }     
    
    //Le boss tape un perso aleatoire
    if (instance.boss.pv > 0) {
        funct.bastonBoss(team);
    }

    //desactiver posture combat hero
    if(posture == "defense" ) {
        console.log("Posture supprime");
        instance.guerrier.defense("end");
        instance.mage.defense("end");
        instance.archer.defense("end");
    } else if (posture == "attaque") {
        console.log("Posture supprime");
        instance.guerrier.attaque("end");
        instance.mage.attaque("end");
        instance.archer.attaque("end");
    } else {
        console.log("Error posture combat");
    }

    //DEFAITE
    if (team.length == 0) {
        //stop boucle infini
        instance.boss.pv = 0;
        console.log(".");
        console.log("!!! Toute votre equipe est MORTE - YOU LOSE !!!");
        console.log(".");
    }

    console.log(".");
    console.log('********************************************');
    console.log(".");
}
