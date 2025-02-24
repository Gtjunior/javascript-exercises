const getTheTitles = function(books) {
    let titles = [];
    books.forEach(book => {
        let title = book.title;
        titles.push(title);
    })
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
