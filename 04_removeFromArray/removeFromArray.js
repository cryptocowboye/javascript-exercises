const removeFromArray = function(arr, b = 0, c = 0, d = 0) {
    const argsList = [...arguments]
    argsList.shift()
    let newList = []
    for (i = 0; i < arr.length; i++) {
        if (!argsList.includes(arr[i])) {
            newList.push(arr[i])
        }
    }
    return newList
};

// Do not edit below this line
module.exports = removeFromArray;
