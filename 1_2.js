/*
    JavaScript - Primitive Data Types

    The following exercise contains the following subjects:
        * Number
        * Boolean

    Instructions:
        * Number Tasks:
            1) Convert the following data types to numbers:
                * Strings: '150', '164aa', '6.14', 'hello'

                parseInt('150') --> 150
                parseInt('164aa') --> 164
                Number('6.14') --> 6.14
                parseInt('hello') --> NaN

                * boolean: true , false  

                Number(true) --> 1
                Number(false) --> 0

            2) What will be the result in the next expressions:

            if there is string as operand it still computes it besides the 'plus' operation then it concatenates the digits (but double 'plus' cancel that')
                * '12' / 4    --> 3
                * 20 / '5'    --> 4
                * true * 2    --> 2
                * 5 * false    --> 0
                * 15 - '5'    --> 10
                * '10' - 5    --> 5
                * '10' + 5    --> '105'
                * 5 + '10'    --> '510'
                * 5 + +'10'    --> 15

        * Boolean Tasks:
            1) What will be the result in the next conditions:

            double equals check the value, but triple equals check both the value and the type
                * 5 == '5'   -->  true
                * '12' === 12   --> false
                * true == 1   --> true
                * '' == false   --> true   -same as NULL?
                * [] == false   --> true   -same as NULL?
                * typeof ('12' / '4') === 'number'   -->  true
                * true !== 1   --> true (check the type too)
                * false != 0   --> false (only check the value)
                * '10' > 5   --> true
                * '10' > '5'   --> false   -lexicographic comparison? according ASCII
 
    Submit the file to Hive
*/

