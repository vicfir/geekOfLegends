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

while (instance.boss.pv > 0) {
    team.forEach(element => {
      if (instance.boss.pv > 0) {
        console.log(`${element.nom} frape ${instance.boss.nom}`);
        instance.boss.pv -= element.pa;
        if (instance.boss.pv <= 0) {
            console.log(`${instance.boss.nom} est mort`);
        } else {
            console.log(`${instance.boss.nom} a ${instance.boss.pv}PV`);
        }
        
      }  
    });
    // instance.boss.pv -= instance.guerrier.pa;
    // console.log(instance.boss.pv);
    // instance.boss.pv -= instance.mage.pa;
    // console.log(instance.boss.pv);
    // instance.boss.pv -= instance.archer.pa;
    // console.log(instance.boss.pv);
}