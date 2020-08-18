
const func = (str, callback) =>{ 
    if (typeof callback == "function") 
        callback(str); 
} 

callbackFunction = (str) => { 
    console.log(str); 
} 

func("shiran", callbackFunction);

