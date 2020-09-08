const storm = {                // An object can be passed as the first argument to call or apply and this will be bound to it.
    superPower:'flying'
}
function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}


printSuperPower.call(storm);
//or
printSuperPower.apply(storm);
