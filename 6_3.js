const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

function getCandy(candyStore, id) {
    for(let i = 0; i <candyStore.candies.length; i++) {
        if(candyStore.candies[i].id===id){
            return candyStore.candies[i];
        }
    }
} 

function getPrice(candyStore, id){
    for(let i = 0; i <candyStore.candies.length; i++) {
        if(candyStore.candies[i].id===id){
            return candyStore.candies[i].price;
        }
    }
} 

function addCandy(candyStore, id, name, price){
    candyStore.candies.push({id, name, price,amount: 1});
}

function buy(candyStore, id){
    const candy=getCandy(candyStore, id)
    if (candy){
        candyStore.cashRegister+=getPrice(candyStore,id);
        candy.amount--;
    }else console.log('Does not exist');
}

console.log(getCandy(candyStore, '5hd7y')); 
console.log(getPrice(candyStore, '5hd7y')); 
console.log(buy(candyStore, '5hd7y'));