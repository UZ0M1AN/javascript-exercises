const reverseString = function(str) {
    let reversedStr = '';

    for (const s of str) reversedStr = s + reversedStr;

    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
