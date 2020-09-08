const person= {
    name:'shiran',
    printName(){
        return `the name is: ${this.name}`;
    },
    printNameAfterSec(){
        setTimeout(person.printName.bind(this),1000);
    }
}
const personame1 =person.printName.bind(person);
console.log(personame1());

const personame2 =person.printNameAfterSec();
console.log(personame2);