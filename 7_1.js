const person1 = {
    name: 'shiran'
}
const person2 = {
    name: 'avior'
}
const person3 = {
    name: 'ofir'
}

const id = 1;
const mymap = new Map();
mymap.set(person1, 1);
mymap.set(person2, 2);
mymap.set(person3, 3);

for (const map of mymap) {
    console.log(map[0],map[1]);
}

mymap.forEach((values,keys)=>{ 
    console.log(values,keys); 
  }) 