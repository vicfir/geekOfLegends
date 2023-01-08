import * as funct from "./function.js";

export class Base {
    constructor(nom, pv, pa){
        this.nom = nom;
        this.pv = pv;
        this.pa = pa;
    }
}

export class Boss extends Base {
    constructor(nom, pv, pa){
        super(nom,pv,pa);
    }
    enigme(element, enigme){
        let enigme1 = "Qu'est-ce qui peut être dans la mer et dans le ciel ?";
        let enigme2 = "Qu'est ce qui est plus grand que la Tour Eiffel, mais infiniment moins lourd ?";
        let enigme3 = "Qu'est-ce qui commence la nuit et termine le matin ?";

        let repEnigme1 = "une étoile";
        let repEnigme2 = "son ombre";
        let repEnigme3 = "la lettre n";

        let enigmeTab = [enigme1, enigme2, enigme3];
        let repEnigmeTab = [repEnigme1, repEnigme2, repEnigme3];

        let randEnigme = funct.randArr(enigmeTab);

        let repEnigme = prompt(`${this.nom} est tombé à moins de 20% de ses PV. Vous avez 3 essai pour survivre. ${randEnigme}`);

        enigme = false;

        for (let index = 0; index <= 2; index++) {
            if (index == 2) {
                element = [];
                
                console.log(`ERROR ${element.length}`);
                console.log(enigme);
                return enigme = true;
                
                // alert("Vous avez perdu !!!");
                
            } else if (repEnigme == repEnigmeTab[enigmeTab.indexOf(randEnigme)]) {
                index = 3;
                this.pv = 0;
                alert("Bonne reponse");
                
            } else {
                repEnigme = prompt("Mauvaise reponse !");
            }
            
        }
    }
}

export class Hero extends Base {
    constructor(nom, pv, pa){
        super(nom,pv,pa);
    }
    defense(condition){
        if (condition == "start") {
            this.pa *= 0.5;
            this.pv *= 2.5;
        } else if (condition == "end") {
            this.pa /= 0.5;
            this.pv /= 2.5;
        }
    }
    attaque(condition){
        if (condition == "start") {
            this.pa *= 1.4;
            this.pv *= 0.75;
        } else if (condition == "end") {
            this.pa /= 1.4;
            this.pv /= 0.75;
        }
    }
}