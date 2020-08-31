let library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];


const books = library.filter(book => book.readingStatus===true)
console.log(books);



// function findByProp(prop,propWeAreLookingFor){
//     return function isBook(book){
//         return book[prop]===propWeAreLookingFor;
//     }
// }

// const displaysBooks = library.find(findByProp('readingStatus',true));
// console.log(displaysBooks);