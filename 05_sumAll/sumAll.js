const sumAll = function(x, y) {
    if (typeof x != 'number' || typeof y != 'number' || x < 0 || y < 0) return 'ERROR';
    
    let smallNum = Math.min(x, y),
        largeNum = Math.max(x, y);
    
    let sum = 0;
    for (; smallNum <= largeNum; smallNum++) sum += smallNum;

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
