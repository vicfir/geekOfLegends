//import * as perso from './module/class.js';
import * as instance from './module/instances.js';
import * as funct from './module/function.js';

//boss
console.log(instance.boss);
alert("Bienvenu dans Geek Of Legends")

//nom hero
instance.guerrier.nom = prompt("Choissisez le nom de votre guerrier");
instance.mage.nom = prompt("Choissisez le nom de votre mage");
instance.archer.nom = prompt("Choissisez le nom de votre archer");
//pv hero
instance.guerrier.pv = Number(prompt(`Vous avez 150 points de vie à distribuer entre les heros. \n Combien voulez vous attribuer à ${instance.guerrier.nom}?`));
instance.mage.pv = Number(prompt(`Il reste ${150 - instance.guerrier.pv} points de vie à distribuer. \n Combien voulez vous attribuer à ${instance.mage.nom}`));
instance.archer.pv = 150 - instance.guerrier.pv - instance.mage.pv;
alert(`Votre archer prend ${instance.archer.pv} points de vie`);
//pa hero
instance.guerrier.pa = Number(prompt(`Vous avez 50 points de d'attaque à distribuer entre les heros. \n Combien voulez vous attribuer à ${instance.guerrier.nom}?`));
instance.mage.pa = Number(prompt(`Il reste ${50 - instance.guerrier.pa} points d'attaque à distribuer. \n Combien voulez vous attribuer à ${instance.mage.nom}`));
instance.archer.pa = 50 - instance.guerrier.pa - instance.mage.pa;
alert(`Votre archer prend ${instance.archer.pa} points d'attaque`);

alert(`Recapitulatif: \nGuerrier: ${instance.guerrier.nom} PV: ${instance.guerrier.pv} PA: ${instance.guerrier.pa}\nMage: ${instance.mage.nom} PV: ${instance.mage.pv} PA: ${instance.mage.pa}\nArcher: ${instance.archer.nom} PV: ${instance.archer.pv} PA: ${instance.archer.pa}`);

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

        //choix posture
        posture = prompt("Quelle posture voulez vous choisir pour ce tour : defense, attaque, normal");

        // });
         //Chacque perso tape a son tour
        for(let value of team){

            if (instance.boss.pv > 0 && team.length != 0) {
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
        instance.guerrier.defense("end");
        instance.mage.defense("end");
        instance.archer.defense("end");
    } else if (posture == "attaque") {
        instance.guerrier.attaque("end");
        instance.mage.attaque("end");
        instance.archer.attaque("end");
    }
    //DEFAITE
    if (team.length == 0) {
        //stop boucle infini
        instance.boss.pv = 0;
        console.log(".");
        alert(" Toute votre equipe est MORTE - YOU LOSE !!!");
        console.log("!!! Toute votre equipe est MORTE - YOU LOSE !!!");
        console.log(".");
    }

    console.log(".");
    console.log('********************************************');
    console.log(".");
}
