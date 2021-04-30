"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, attack, health) {
        this.name = name;
        this.speed = speed;
        this.attack = attack;
        this.health = health;
    }
    Pokemon.prototype.AttackEnemy = function (attack, pokemon) {
        if (attack.pp > 0) {
            pokemon.health -= attack.damage;
        }
    };
    Pokemon.prototype.getHp = function () {
        return this.health;
    };
    Pokemon.prototype.getAttack = function () {
        return this.attack;
    };
    Pokemon.prototype.setHp = function (health) {
        this.health = health;
    };
    Pokemon.prototype.isAlive = function () {
        return this.health > 0;
    };
    Pokemon.prototype.getName = function () {
        return this.name;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
