array=[];

function  BOOM(num) {
    for(let i = 0; i <= num ; i++){
        array.push(i);
    }
    for(let i = 1; i < array.length; i++){
        if(array[i] % 7 === 0){
            if(array.includes(7, i))
            {
                console.log(' BOOM-BOOM ');
            }else{
                console.log(' BOOM ');
            }
        }else{
            console.log(i);
        }
    }
}


BOOM(70);

