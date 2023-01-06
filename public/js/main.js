//import * as perso from './module/class.js';
import * as instance from './module/instances.js';

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
      if (instance.boss.pv > 0) {
        console.log(`${element.nom} frappe ${instance.boss.nom}`);
        instance.boss.pv -= element.pa;
        if (instance.boss.pv <= 0) {
            console.log(`${instance.boss.nom} est MORT`);
        } else {
            console.log(`${instance.boss.nom} a ${instance.boss.pv}PV`);
        }       
      }  
    });
}