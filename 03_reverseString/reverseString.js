const reverseString = function(letters) {
    wordContainer = []
    for (letter of letters) {
        wordContainer.unshift(letter);
    }
    return wordContainer.join('')
};

// Do not edit below this line
module.exports = reverseString;
