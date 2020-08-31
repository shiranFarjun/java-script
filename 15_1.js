// Front end development: Tricky Parts
// JavaScript – scope & hoisting
// The following exercise contains the following subjects:
//  scope
//  hoisting
// Instructions
// Without running the code below, explain in your own words what the result
// of each block of code will be and why.
// If there are any faulty outputs, please write on how we can fix them.
// *****************   Block 1
function funcA() {
    var a = 1;
    console.log(a);
    console.log(foo());
    
    function foo() {
        return 2;
    }
}

// funcA();
//console.log(a) will print undefined because the var a is not get value befor the console.log(a).
//Perform the placement for var a before console.log(a);



// *****************   Block 2
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
    }
};
console.log(obj.prop.getFullName());  //'Aurelio De Rosa'
var test = obj.prop.getFullName;
console.log(test());//'John Doe




// // *****************   Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
}
funcB();
console.log(typeof a);   //
console.log(typeof b);  
//a will print undifined, and b print number. 
//the b var was defined as global and therefore will be availabe in globle scope


// // *****************   Block 4
function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();
// the ouput will be of the last function shown. 
//because it override the first function with the same name. 
//output--> 2.

// // *****************   Block 5
function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
console.log(e);
//the output  of console.log(d) --> 1 because it declared global var. 
//in D2 the e declared as var inside the func, scope so it's not available outside. 


// // *****************   Block 6
function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// output: undifined and 1 - the global var f declared but did not define a value so it 'undifined. 
//to solve this problem i need to change place of declaration to the top var f = 1

