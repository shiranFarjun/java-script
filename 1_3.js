
/*
    JavaScript - Primitive Data Types

    The following exercise contains the following subjects:
        * String
        * undefined

    Instructions:
        * String Tasks:
            1) Write the phrase "Welcome to Full-Stack Bootcamp" as a String in 5 different ways.

                *)let arr = "Welcome to Full-Stack Bootcamp";
                *)let str = new String("Welcome to Full-Stack Bootcamp");
                *)let arr = ['W','e,'l','c','o','m','e','','t''o','','F','u','l','l','-','S','t','a','c','k','','B','o','o','t','c','a','m','p'];

            2) Get the first letter of the word "Bootcamp" using two different ways.

            1) let result = "Bootcamp".charAt(0);
            2) let arr = [B,o,o,t,c,a,m,p] ; 
                let result = arr[0];

            3) Write two string variables with the same word, in a way that when compared will result in false.

                let str1 = ['H','e','l','l','o'];
                let str2 = 'Hello';
                str1 == str2        -->false

            4) Get the length of the String from the first task.

            let num = "Welcome to Full-Stack Bootcamp".length;

            5) Combine these two Strings "Hello" and "World" using as many different ways you can (at least 3).
                *) str = 'Hello' + ' ' + 'World';
                *) ['Hello', ' ', 'World'].join('');
                *) 'Hello'.concat(' ', 'World');

        * undefined Tasks:
            1) Create an undefined variable in two differnet ways.

            *) let x;
            *) let y = {num = 1, str = 'a'};
                let y.last = 5;

            2) Check if a variable is undefined in two differnet ways.

    Submit the file to Hive
*/
