const book1 = {
    title: 'DIARY OF A WIMPY KID',
    author: 'jeff kinney',
    year: 2008
};
const book2 = {
    title: 'מנהרת הזמן',
    author: 'גלילה רון',
    year: 2000
};


const bookUtils = {
    getFirstPublished: function (book1, book2) {
        return book1.year < book2.year ? book1 : book2;
    },
    setNewEdition: function (book, editionYear) {
        return book.latestEdition = editionYear;
    },
    setLanguage: function (book, language) {
        return book.language = language;
    },
    setTranslation: function (book, language, translator) {
        book.translation = {
            translator: translator,
            language: language
        }
    },
    setPublisher: function (book, name, location) {
        book.publisher = {
            name: name,
            location: location
        }
    },
    isSamePublisher: function (book1, book2) {
        return book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location;
    }
}

console.log(bookUtils.getFirstPublished(book1, book2));