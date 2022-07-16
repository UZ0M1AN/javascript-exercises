const removeFromArray = function(arr, ...items) {
    const splicedArr = [...arr];
    
    for (const item of items) {
        const itemIndex = splicedArr.indexOf(item);
        if (itemIndex >= 0) splicedArr.splice(itemIndex, 1);
    }

    return splicedArr;
};

// Do not edit below this line
module.exports = removeFromArray;
