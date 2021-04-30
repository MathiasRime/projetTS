import {Pokemon} from "./Pokemon";

export class Attack{
    name :string;
    damage :number;
    pp :number;
    accuracy :number;

    constructor(name :string, damage:number, pp: number,accuracy: number) {
        this.name = name;
        this.damage = damage;
        this.pp = pp;
        this.accuracy = accuracy
    }

    getPp(){
        return this.pp;
    }

    getDamage(){
        return this.damage;
    }


}


