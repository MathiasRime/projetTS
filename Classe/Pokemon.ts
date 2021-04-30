import {Attack} from "./Attack";

export class Pokemon {
    name :string;
    speed :number;
    health :number;
    attack :Attack[];

    constructor(name: string, speed: number,attack : Attack[], health : number) {
        this.name = name;
        this.speed = speed;
        this.attack = attack;
        this.health = health;
    }

    AttackEnemy(attack: Attack,pokemon: Pokemon){
        if(attack.pp > 0){
            pokemon.health -= attack.damage;
        }
    }

    getHp(){
        return this.health;
    }

    getAttack(){
        return this.attack;
    }

    setHp(health :number){
        this.health = health;
    }

    isAlive(){
        return this.health > 0;
    }


    getName() {
        return this.name;
    }
}

