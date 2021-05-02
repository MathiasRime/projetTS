import {Attack} from "./Classe/Attack";
import {Pokemon} from "./Classe/Pokemon";
import {Fight} from "./Classe/Fight";

let Morsure :Attack = new Attack("Morsure",10,25,50);
let Charge :Attack = new Attack("Charge",20,35,70);
let Carapuce :Pokemon = new Pokemon("Carapuce",100,[Morsure],100);
let Salameche :Pokemon = new Pokemon("Salameche",120,[Charge],100);

let combat :Fight = new Fight(Carapuce,Salameche);

combat.battle();



