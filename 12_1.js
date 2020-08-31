// Write the following functions using the reduce built-in function.
// 1. max
// 2. sum of even numbers
// 3. average


//1
const ArrayList = [1, 2, 3, 4, 3, 20, 0];
const LargestNum = ArrayList.reduce((prev, curr) => {
    return Math.max(prev, curr);
});
// console.log(LargestNum);


//2
function sumEven(str) {
    return str
      .split("")
      .filter(x => x % 2 === 0)
      .reduce((acc, val) => acc + Number(val), 0);
  }
console.log(sumEven("112,sf34,4)-k)"))


//3
function avrg(arr) {
    return arr
        .reduce((acc, val) => (acc + Number(val)/arr.length), 0);
  }
  
console.log(avrg([1, 2, 3, 4, 3, 20, 0]));
