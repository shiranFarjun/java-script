let arr = [2, 3, 4, 5, 12, 3, 6, 8];

//1
const doubleValues = (data) => {
    return data.map(el => el * 2);
};

//2
const onlyEvenValues = (arr) => {
    let newArr = [];
    arr.forEach(element => {
        if (element % 2 === 0) {
            newArr.push(element);
        }
    });
    return newArr;
}
//3
const data=[{ S: 1 }, { H: 2 }, { I: 3 },{ R: 7 }, { A: 4 },{ N: 9 }];
const addKeyAndValue = (arr, key, val) => {
    arr.forEach(el => el[key] = val);
    return arr;
}

//4
const shiftLetters=(str)=>{
    let ints = str.split('').map(ascii);
    ints.forEach((el,index,ints) => ints[index]=el-1 );
    let newStr = ints.map(el => String.fromCharCode(el));
    console.log(newStr);
}
function ascii (a) { 
    return a.charCodeAt(0); 
}

shiftLetters('shiran');
console.log(addKeyAndValue(data,'H', 2));
console.log(doubleValues(arr));
console.log(onlyEvenValues(arr));