const people = ["Greg", "Mary", "Devon", "James"];

//1
console.log('1: ');
people.forEach(element => {
    console.log(element);
});
//2
const indexGreg = people.indexOf("Greg");
people.splice(indexGreg, 1);
//3
const indexjames = people.indexOf("James");
people.splice(indexjames, 1);
//4
people.unshift("Matt");
//5
people.push("shiran");

//6
for (i in people){
    if(people[i].match("Mary")){
        break;
    }else{
        console.log(people[i]);
    }
}

//7
let iMary=people.indexOf("Mary");
let iMatt=people.indexOf("Matt");
const newArray = [
    ...people.slice(0,iMatt),
    ...people.slice(iMatt+1,iMary),
    ...people.slice(iMary+1)
];
console.log(newArray);

//8
iMary=people.indexOf("Mary");
iFoo=people.indexOf("Foo");

//9
console.log("iMary: "+iMary);
console.log("iFoo: "+iFoo);

//10
let newArray2 = ["Greg", "Mary", "Devorn", "James"];
newArray2.splice(2,1,"Elizabeth","Artie");
console.log(newArray2);

//11
const withBob=[...people,"Bob"];
