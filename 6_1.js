const book = {
    title:'DIARY OF A WIMPY KID',
    author:'jeff kinney',
    year:2008,
    BookPublishing:'Kinneret',
    design:'jeff kinney',
    description:function(book)
    {
        return `The book ${this.title} was written by ${this.author} in the year ${this.year}`
    }
};
console.log(book.description());