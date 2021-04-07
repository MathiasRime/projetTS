import {Pokemon} from "./Classe/Pokemon";

function isAttackingfirst(pokemonA :Pokemon,pokemonB :Pokemon){
    if(pokemonA.speed > pokemonB.speed){
        return pokemonA;
    } else {
        return pokemonB;
    }

}


describe("attackFirst",() => {
    it("it should return the pokemon with the higher speed",() => {
        const pokemonA = new Pokemon("Carapuce",123);
        const pokemonB = new Pokemon("Salameche",110);

        const result = isAttackingfirst(pokemonA,pokemonB);
        expect(result).toBe(pokemonA);
    });
});
