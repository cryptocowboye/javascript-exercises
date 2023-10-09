const fibonacci = function(num) {
    if (num > 0) {
        let newList = []
        for (i = 0; i < num; i++) {
            if (newList.length == 0 || newList.length == 1) {
                newList.push(1)
            } else {
                newList.push(newList[newList.length - 1] + newList[newList.length - 2])
            }
        }
        return newList[num - 1]
    } else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
