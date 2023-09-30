const repeatString = function(string, num) {
    let stringHolder = string;
    if (num > 0) {
        for (i = 1; i < num; i++) {
            string = string + stringHolder
        }
        return string
    } else if (num === 0) {
        return ''
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;
