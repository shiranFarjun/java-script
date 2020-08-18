let pointplayer1,pointplayer2,pointplayer3;
const totalPoint =(point1, point2, point3)=>Math.round((point1+point2+point3)/3);

pointplayer1=totalPoint( 89, 120,103);//312
pointplayer2=totalPoint(116, 94 ,123);//333
check(pointplayer1,pointplayer2,'John\'s', 'Mike\'s' );

pointplayer1=totalPoint( 59, 70,143);//272
pointplayer2=totalPoint(76, 90 ,59);//225
check(pointplayer1,pointplayer2,'John\'s','Mike\'s');

pointplayer1=totalPoint( 97, 134,105);  //336
pointplayer2=totalPoint(72, 100 ,59);    //231
pointplayer3=totalPoint(101,32,46);      //179
checkWinner(pointplayer1,pointplayer2,pointplayer3,'mary','John\'s','Mike\'s');

pointplayer1=totalPoint( 34, 67,19);  //120
pointplayer2=totalPoint(42, 13 ,58);   //113
pointplayer3=totalPoint(12,36,95);      //143
checkWinner(pointplayer1,pointplayer2,pointplayer3,'mary','John\'s','Mike\'s');


function check(pointplayer1,pointplayer2,player1,player2){
    if(pointplayer1>pointplayer2){
        return console.log('\n'+player1+' winner with '+pointplayer1 +' points');
    }else if(pointplayer2<pointplayer1) {
        return console.log('\n'+player2+' winner with '+pointplayer2 +' points');
    }else{
        return console.log('\n'+'The same average score ');
    }
}

function checkWinner(pointplayer1,pointplayer2,pointplayer3,player1,player2,player3){
    if(pointplayer1>pointplayer2 && pointplayer1>pointplayer3){
        return console.log('\n'+player1+' winner with '+pointplayer1 +' points');
    }else if(pointplayer2>pointplayer1 && pointplayer2>pointplayer3) {
        return console.log('\n'+player2+' winner with '+pointplayer2 +' points');
    }else if(pointplayer3>pointplayer1 && pointplayer3>pointplayer2){
        return console.log('\n'+player3+' winner with '+pointplayer3 +' points');
    }else{
        return console.log('\n'+'draw');
    }
}


