function leapYear(year) {
    while(year % 4 == 0 && year % 100 == 0){
        if(year %400==0){
            return console.log('It is indeed a leap year -while');
        }
        return console.log('This is not a leap year.')
    }
    return console.log('It is indeed a leap year');
}

leapYear(2012);
leapYear(2100);
leapYear(2400);