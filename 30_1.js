// Write a function that takes a number as an argument and returns a Promise
// that tests if the value is less than or greater than the value 10.
// If it is greater than 10 it is resolved, if it is less than 10 it is rejected.
// Call the function and print the resolve and reject in a .then, .catch.

function tests(num) {
    const testPromise = new Promise((resolve, reject) => {
        if (num > 10) {
            const msgStr='The number is greater than the value 10.';
            resolve(msgStr);
        } else {
            const err='The number is less than the value';
            reject(err);
        }
    });
    return testPromise;
}

tests(23).then((msg) => {
    console.log(msg);
}).catch((err) => {
    console.log(err);
});
