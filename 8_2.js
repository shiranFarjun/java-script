const array1=["boo", "doooo", "hoo","ro"];
let  array2=[];
function LengthStrings(array){
    for(i in array){
        array2.push(array[i].length);
    }

}

LengthStrings(array1)
console.log(array2);