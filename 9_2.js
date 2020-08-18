let counter=0;
function getRandom(min, max) {
    return console.log('rand: '+parseInt(Math.random() * (max - min) + min));
}
const func = (num, callback,parms1,parms2) =>{ 
    while(callback(parms1,parms2) != num){
        console.log(counter+=1);
    }
    console.log(counter);
} 

func(7,getRandom,1,20);