const fibonacci = function(max) {
    let sequence = [1, 1];
    let index = 0;
    let num = Number(max);

    if (num < 0) {
        return "OOPS";
    } else if (num === 0) {
        return 0;
    }

    while (sequence.length < num) {
        let firstNum = sequence[index];
        let secondNum = sequence[index + 1];
        let sum = firstNum + secondNum;

        sequence.push(sum);
        index++;
    }


    return sequence[num - 1];
};

// Do not edit below this line
module.exports = fibonacci;
