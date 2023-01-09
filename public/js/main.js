//import * as perso from './module/class.js';
import * as instance from './module/instances.js';
import * as funct from './module/function.js';

//boss
console.log(instance.boss);

//hero
console.log(instance.guerrier);
console.log(instance.mage);
console.log(instance.archer);

let team = [instance.guerrier, instance.mage, instance.archer];

let pvBossBase = instance.boss.pv;

let posture;

//Boucle generale
while (instance.boss.pv > 0 && team.length != 0) {

    if (instance.boss.pv > 0 && team.length != 0) {

         // suivi pv
        console.log(`${instance.guerrier.nom} PV:${instance.guerrier.pv} Rage:${instance.guerrier.rage} | ${instance.mage.nom} PV:${instance.mage.pv} Mana:${instance.mage.mana} | ${instance.archer.nom} PV:${instance.archer.pv} Flèches:${instance.archer.fleche} || ${instance.boss.nom} PV:${instance.boss.pv}`);
        console.log(".");

        // //choix posture
        // posture = prompt("Quelle posture voulez vous choisir pour ce tour : defense, attaque, normal");

        // //Chacque perso tape a son tour
        // team.forEach(element => {

        //     //actifer posture combat
        //     if(posture == "defense" ) {
        //         console.log("Posture defense");
        //         element.defense("start");
        //     } else if (posture == "attaque") {
        //         console.log("Posture attaque");
        //         element.attaque("start");
        //     } else if (posture == "normal") {
        //         console.log("Posture normal");
        //     } else {
        //         console.log("Error posture combat");
        //     }
            
        //     //tant que le boss est en vie
        //     if (instance.boss.pv > 0 && team.length != 0) {
        //         console.log(`Action : ${element.nom} frappe ${instance.boss.nom} -> ${instance.boss.nom} ${instance.boss.pv}PV - ${element.pa}PV`);
        //         //attaque hero
        //         switch (element) {
        //             case instance.guerrier:
        //                 //attaque guerier
        //                 funct.bastonGuerrier(element);
        //                 break;

        //             case instance.mage:
        //                 //attaque mage
        //                 funct.bastonMage(element);                
        //                 break;

        //             case instance.archer:
        //                 //ataque archer
        //                 funct.bastonArcher(element)
        //                 break;
                
        //             default:
        //                 console.log("error");
        //                 break;
        //         }
        //         //lancement enigme boss -20%pv
        //         if (instance.boss.pv <= pvBossBase/5 && instance.boss.pv > 0 && team.length != 0){
        //             console.log(`PERSONNES RESTANTES:${team.length} VIE DU BOSS:${instance.boss.pv}`);
        //             instance.boss.enigme(team);
                    
        //             // console.log(instance.boss.enigme(team));
        //             // console.log(`PERSONNES RESTANTES:${team.length} VIE DU BOSS:${instance.boss.pv}`);
        //         }
                
        //         //VICTOIRE
        //         if (instance.boss.pv <= 0) {
        //             console.log(".");
        //             console.log(`!!! ${instance.boss.nom} est MORT - YOU WIN !!!`);
        //         }

        //         console.log(".");
        //     }

        // });
         //Chacque perso tape a son tour
        for(let value of team){

            //actifer posture combat
            if(posture == "defense" ) {
                console.log("Posture defense");
                value.defense("start");
            } else if (posture == "attaque") {
                console.log("Posture attaque");
                value.attaque("start");
            } else if (posture == "normal") {
                console.log("Posture normal");
            }
            
            //tant que le boss est en vie
            if (instance.boss.pv > 0 && team.length != 0) {
                console.log(`Action : ${value.nom} frappe ${instance.boss.nom} -> ${instance.boss.nom} ${instance.boss.pv}PV - ${value.pa}PV`);
                //attaque hero
                switch (value) {
                    case instance.guerrier:
                        //attaque guerier
                        funct.bastonGuerrier(value);
                        break;

                    case instance.mage:
                        //attaque mage
                        funct.bastonMage(value);                
                        break;

                    case instance.archer:
                        //ataque archer
                        funct.bastonArcher(value)
                        break;
                
                    default:
                        console.log("error");
                        break;
                }
                //lancement enigme boss -20%pv
                if (instance.boss.pv <= pvBossBase/5 && instance.boss.pv > 0 && team.length != 0){
                    console.log(`PERSONNES RESTANTES:${team.length} VIE DU BOSS:${instance.boss.pv}`);
                    let finEnigme = instance.boss.enigme(team);
                    if (finEnigme == true){
                        instance.boss.pv = 0;
                    } else if (finEnigme == false){
                        team = [];
                    }
                }
                
                //VICTOIRE
                if (instance.boss.pv <= 0) {
                    console.log(".");
                    console.log(`!!! ${instance.boss.nom} est MORT - YOU WIN !!!`);
                    
                }

                console.log(".");
            }

        };

    }     
    
    //Le boss tape un perso aleatoire
    if (instance.boss.pv > 0 && team.length != 0) {
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
