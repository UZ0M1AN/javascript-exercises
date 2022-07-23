const palindromes = function (str) {
    const pureStr = str.toLowerCase().replace(/[^a-z]/ig, '');
    return pureStr == [...pureStr].reverse().join``;
};

// Do not edit below this line
module.exports = palindromes;
