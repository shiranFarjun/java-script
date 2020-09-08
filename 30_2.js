// Write two functions that use Promises that you can chain.
// The first function, makeAllCaps(), will take in an array of words and capitalize
// them, and then the second function, sortWords(), will sort the words in
// alphabetical order. If the array contains anything but strings, it should throw
// an error.
// Call the functions once with an array of words and call it once with an array
// that includes at least one item that is not a word. Print the resolve and reject
// in a .then, .catch


function makeAllCaps(array = []) {
    return CapsArray = new Promise((resolve, reject) => {
        for (i in array) {
            if (/[^a-zA-Z]/.test(array[i])) {
                const err = 'The str is not a string type';
                reject(err);
            }
        }
        array = array.map(function (x) {
            return x.toUpperCase();
        });
        resolve(array);
    });
}

function  sortWords(array){
    return array.sort() ;
}

let array1 = ["banana", "orange", "lemon","apple"];
let array2 = [324, "banana", "apple", "orange", "lemon"];

// makeAllCaps(array2).then((array) => {
//     return console.log(sortWords(array));
// }).catch((err) => {
//     console.log(err);
// });

makeAllCaps(array1).then((array) => {
    return console.log(sortWords(array));
}).catch((err) => {
    console.log(err);
});





