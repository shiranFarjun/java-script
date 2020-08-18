const emptyObj={};
let emptyMap=new Map();
const  names = ["shiran", "or", "tal", "gal", "moran", "rafi", "avior" , "ofir", "ruth","atara"];
let counter=0;

for (let name of names) {
    counter++;
    Object.entries(emptyObj).forEach(([key,value]) => { emptyObj[name] = counter })
    // Object.assign(emptyObj,{name: counter});
}

console.log(emptyObj);