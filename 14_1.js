
//1) the problem is that i can`t use property 'length' of undefined.
//2) i use callstack in terminal.
//To solve the problem when sending the parameters i add ','
// then i get another  error because I tried to change a const variable, so i  change him to let,
//and add retutn value sum.

function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
getSum([1, 2, 3],[5, 66, 23]);