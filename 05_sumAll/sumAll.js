const sumAll = function() {
    let sum = 0;
    let argsList = [...arguments]
    argsList.sort()
    for (item of argsList) {
        if (typeof item !== 'number') {
            return 'ERROR'
        }
    }
    for (i = argsList[0]; i <= argsList[argsList.length - 1]; i++) {
        if (i < 0) {
            return 'ERROR'
        }
        sum = sum + i
    }
    return sum
};
// Do not edit below this line
module.exports = sumAll;
