const obj={
    name:'avior',
    age:3
}

function swap(obj){
    let newobj={};
    for (const key in obj){
        newobj[obj[key]]=key;
    }
    return newobj;
}
console.log(swap(obj));