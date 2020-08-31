const food = ["Noodle", "Pasta","Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];


const compare = (arr1, arr2) => {
    intersection = arr1.filter(x => arr2.includes(x));
    return intersection ? intersection : 'false';

}

console.log(compare(food, food1));