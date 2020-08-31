const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

//1
const printDataName = (data) => {
    let namesArray = [];
    data.forEach(element => namesArray.push(element.name));
    return namesArray;
}

//2
const befor1990 = (data) => {
    let arraYers = [];
    let arrayObj = [];

    data.forEach(element => arraYers.push(element.birthday));
    for (i in arraYers) {
        if (Date.parse(arraYers[i]) < Date.parse('1-1-1990')) {
            arrayObj.push(data[i]);
        }
    }
    return arrayObj;
}
//3
const food = (arr) => {
    const obj = {};
    arr.forEach((el) => {
        el.favoriteFoods.meats.forEach((foodObj) => {
            obj[foodObj] = obj[foodObj] + 1 || 1;
            //exmple 2: 
            // if(obj[meatIteam]){
            //     obj[meatIteam]+1;
            // }else{
            //     obj[meatIteam]=1;
            // }
        })
        el.favoriteFoods.fish.forEach((fishIteam) => {
            obj[fishIteam] = obj[fishIteam] + 1 || 1;
        })
    })
    return obj;
}




// console.log(printDataName(data));
// console.log(befor1990(data));
console.log(food(data));



