import {Pokemon} from "./Pokemon";
import {Attack} from "./Attack";




export class Fight{
    pokemonA :Pokemon;
    pokemonB :Pokemon

    constructor(pokemonA :Pokemon,pokemonB :Pokemon) {
        this.pokemonA = pokemonA;
        this.pokemonB = pokemonB;

    }

    isAttackingFirst(){

        let pokemonList;

        if(this.pokemonA.speed > this.pokemonB.speed){
            pokemonList = [this.pokemonA,this.pokemonB];
        } else {
            pokemonList = [this.pokemonB,this.pokemonA];
        }
        return pokemonList;
    }


    pokemonAttack(attack :Attack,pokemonEnemy :Pokemon){

        pokemonEnemy.health -= attack.getDamage();
    }

    getWinner(pokemonA :Pokemon,pokemonB :Pokemon){

           if(pokemonA.isAlive() === true && pokemonB.isAlive() === false){

               return pokemonA.getName();

           } else if(pokemonA.isAlive() === false && pokemonB.isAlive() === true){

               return pokemonB.getName();

           } else if(pokemonA.isAlive() === false && pokemonB.isAlive() === false){

               return "match null";

           } else {

               return null;

           }


    }

   async battle() :Promise<string>{
        let winner =  this.getWinner(this.pokemonA,this.pokemonB);
        while(winner === null){

           await this.round();
           winner =  this.getWinner(this.pokemonA,this.pokemonB);

        }
        return winner;
        console.log(winner);
    }

    round(){
        setTimeout(() =>{

            let pokemonOrder :Pokemon[] = this.isAttackingFirst();

            pokemonOrder[0].AttackEnemy(pokemonOrder[0].getAttack()[0],pokemonOrder[1]);
            pokemonOrder[1].AttackEnemy(pokemonOrder[1].getAttack()[0],pokemonOrder[0]);
        },300);

    }

}
