const getTheTitles = function(library) {
    let title = library.map((book) => {
        return book.title
    })
    return title
};

// Do not edit below this line
module.exports = getTheTitles;
