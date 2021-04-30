import {Pokemon} from "../Classe/Pokemon";
import {Attack} from "../Classe/Attack";
import {Fight} from "../Classe/Fight";
import inquirer from 'inquirer';




describe("attackFirst",() => {
    it("it should return the pokemon with the higher speed",() => {
        const morsure = new Attack("Morsure",10,35,70);
        const pokemonA = new Pokemon("Carapuce",123,[morsure],100);
        const pokemonB = new Pokemon("Salameche",110,[morsure],100);
        const fight = new Fight(pokemonA,pokemonB);

        const result = fight.isAttackingFirst();
        const expected = [pokemonA,pokemonB];
        expect(result).toEqual([pokemonA,pokemonB]);
    });
});

describe("attackEnemy",() => {
    it("it should return life as 90",()=>{

        const charge = new Attack("Morsure",10,35,70);
        const pokemonA = new Pokemon("Carapuce",123,[charge],100);
        const pokemonB = new Pokemon("Salameche",110,[charge],100);
        const fight = new Fight(pokemonA,pokemonB);

        fight.pokemonAttack(charge,pokemonB);
        expect(pokemonB.getHp()).toBe(90);
    });

});

describe("isAlive",() => {
    it("it should return life as false",()=>{

        const charge = new Attack("Morsure",10,35,70);
        const pokemonA = new Pokemon("Carapuce",123,[charge],0);
        expect(pokemonA.isAlive()).toBe(false);
    });

});

describe("getPP",() => {
    it("it should return life as false",()=>{

        const charge = new Attack("Morsure",10,35,70);
        const pokemonA = new Pokemon("Carapuce",123,[charge],0);
        expect(pokemonA.getAttack()[0].getPp()).toBe(35);
    });

});

describe("round",() => {
    it("it should return Carapuce",()=>{

        const charge = new Attack("Morsure",10,35,70);
        const pokemonA = new Pokemon("Carapuce",123,[charge],100);
        const pokemonB = new Pokemon("Salameche",123,[charge],100);
        const fight = new Fight(pokemonA,pokemonB);


        fight.round();

        expect(pokemonA.getHp()).toBe(90);
    });

});

describe("battle",() => {
    it("it should return Carapuce",()=>{

        const charge = new Attack("Morsure",10,35,70);
        const Morsure = new Attack("Morsure",50,35,70);
        const pokemonA = new Pokemon("Carapuce",123,[Morsure],100);
        const pokemonB = new Pokemon("Salameche",123,[charge],100);
        const fight = new Fight(pokemonA,pokemonB);



        expect(fight.battle()).toBe("Carapuce");
    });

});


