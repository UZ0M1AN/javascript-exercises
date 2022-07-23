const getTheTitles = function(arrOfObjs) {
    const titles = [];

    arrOfObjs.forEach(obj => titles.push(obj.title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
