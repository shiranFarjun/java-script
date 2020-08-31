function findSmallest(a, b, c) {
    if (a > b > c) {
        return c;
    } else if (a > c > b) {
        return a;
    } else {
        return b;
    }
}
console.log(findSmallest(52, 66, 2));

//err-> ReferenceError: findSmalest is not defined
//
//callstack in terminal
//
//I creat function with the name findSmallest,but when i call it i write his name findSmalest.
