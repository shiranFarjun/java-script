
const wonderWoman = {
    name: "Diana Prince"
}
const batman = {
    name: "Bruce Wayne"
}
const superHeroes = [wonderWoman, batman];


function printName() {
    console.log(`my name is ${this.name}`);
}

function printHeroes(heroes=[], printFunc) {
    for(let obj in heroes) {
        printFunc.call(heroes[obj]);
    }
}

printHeroes(superHeroes,printName);