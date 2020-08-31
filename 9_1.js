
const func = (str, callback) =>{ 
    if (typeof callback == "function") 
        callback(str); 
} 

const callbackFunction = (str) => { 
    console.log(str);

} 

func("shiran", callbackFunction);

