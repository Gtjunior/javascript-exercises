const repeatString = function(str, num) {
    let sentence = "";

    if (num < 0) {
        return ("ERROR");
    }

    for (let i = 0; i < num; i++) {
        sentence += str;
    }
    return sentence;
};

// Do not edit below this line
module.exports = repeatString;
