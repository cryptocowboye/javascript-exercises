const palindromes = function (str) {
    let palindromeContainer = [];
    let reverseContainer = [];
    let numChecker = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    for (letter of str) {
        if (letter.toLowerCase() !== letter.toUpperCase() || numChecker.includes(letter)) {
            palindromeContainer.push(letter)
            reverseContainer.unshift(letter)
        }
    }
    let palindromeJoin = palindromeContainer.join('');
    let reverseJoin = reverseContainer.join('')
    if (palindromeJoin.toLowerCase() == reverseJoin.toLowerCase()) {
        console.log('true')
        return true
    } else {
        console.log('false')
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
