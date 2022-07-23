const findTheOldest = function(arr) {
    let oldest = 0, index;

    for (let i = 0; i < arr.length; i++) {
        const death = arr[i].yearOfDeath || new Date().getFullYear(),
              birth = arr[i].yearOfBirth;

        if (death - birth > oldest) {
            oldest = death - birth;
            index = i;
        }
    }
    return arr.find((_, i) => i == index);
};

// Do not edit below this line
module.exports = findTheOldest;
