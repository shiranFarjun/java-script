
const obj = {};
const myMap = new Map();
const  names = ["shiran", "or", "tal", "gal", "moran", "rafi", "avior" , "ofir", "ruth","atara"];

for(let i=0; i < names.length; i++){
    obj[i] = i;
    myMap.set(i, i);
}


console.time('timerObj');
// for(let key in obj) {
//     if(obj.hasOwnProperty(key) === 3) {
//         break;
//     }
// }
obj.hasOwnProperty(3);
console.timeEnd('timerObj')



console.time('timerMap');
// for (let entry of myMap){
//     if(entry === 3) {
//         break;
//     }
// }
myMap.has(7);
console.timeEnd('timerMap')


