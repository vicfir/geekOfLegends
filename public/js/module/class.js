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
    enigme(){

    }
}

export class Hero extends Base {
    constructor(nom, pv, pa){
        super(nom,pv,pa);
    }
    defense(){

    }
    attaque(){

    }
}