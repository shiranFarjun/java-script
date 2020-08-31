function getSumOfEven(arr) {
    return  arr[1] + arr[3] + arr[5] + arr[7]+ arr[9];
}
console.log(getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


//1)NaN
//2)I tried to understand the problem with console.log by printing the even members in the array.
//when i printed arr[10] I got NAN
//3) I tried to add nan for value and because of that i got NaN.
//4)I change the index of arr --> arr[1] + arr[3] + arr[5] + arr[7]+ arr[9]