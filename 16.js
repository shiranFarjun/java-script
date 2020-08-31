// Block 1

var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
//firstResult = function:otherFunction because that what someFunction return
//and result will be equal to what function:otherFunction return--> 5


//Block 2
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
// b2();
// console.log(a);

//console will show 1 bacase js is a lexical scoping /static scoping -the way variable look-up or scope look-up 
//happens is where the function are defined not where they run 




//Block 3
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100);
}


// 1. There is a call to a log function with a delay of 100 milliseconds.
// 2. The function should print i 3 times, but postpones it because of the delay.
// 4. In the meantime I go up from 0 to 3 and when it becomes 3, the loop ends.
// 5. Now the function prints the three times after the delay, but its current value is 3.

// Therefore the output is:
// 3
// 3
// 3

