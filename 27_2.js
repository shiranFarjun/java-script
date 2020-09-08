function Pokemon(pokemonName, pokemonType,pokemonAttackList=[]) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
}

Pokemon.prototype.callPokemon =function(){
    return `I choose you, ${this.name}`
}

Pokemon.prototype.attack =function(num){
   
    return `${this.name} used ${this.attackList[num]}`
}


let bulbasaur = new Pokemon('Bulbasaur', 'Grass', [ 'Growl', 'Tackle' ]);
let charmander = new Pokemon('Charmander', 'Fire', [ 'Fire Spin', 'Fire Fang' ]);
let pokemon=new Pokemon(`charmander`,`fire`,['Flash Cannon','Fleur Cannon', 'Lucky Chant', 'Helping Hand']);

console.log("\n",bulbasaur.callPokemon());
console.log(bulbasaur.attack(1));


console.log("\n",pokemon.callPokemon());
console.log(pokemon.attack(4));


console.log("\n",charmander.callPokemon());
console.log(charmander.attack(0));