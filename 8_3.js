const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr)=>{
    const newArray=array.join("").toLowerCase().split("");
    const letter={};
    for (let i=0; i<newArray.length;i++){
        if(newArray[i] == " "){
            continue;
        }else if(letter[newArray[i]]){
            letter[newArray[i]]+=1;
        }else{
            letter[newArray[i]]=1;
        }
    }
    console.log(letter);
}
countLetters(array);