function score(num) {
   if(num>=0 && num<=64)console.log('"F"');
   else if(num>=65 && num<=69)console.log('"D"');
   else if(num>=70 && num<=79)console.log('"C"');
   else if(num>=80 && num<=89)console.log('"B"');
   else if (num>=90 && num<=100)console.log('"A"');
   else{
       console.log('The num is out of the range')
   }
}
score(7); 
score(65);
score(78);
score(80);
score(95);
score(104);