const checkIntegers = function(...nums) {
    for (let i = 0; i < nums.length; i++) {

        let num = nums[i];

        if (typeof num !== "number" || num % 1 !== 0 || num < 0) {
            return true;
        }
    }

    return false;
}

const sumAll = function(num1, num2) {
    // 1. Create sum variable
    let sum = 0;
    let min;
    let max;

    // 2. Check if parameters are numbers
    if (checkIntegers(num1, num2)) {
        return "ERROR";
    }

    if (num1 < num2) {
        min = num1;
        max = num2;
    } else {
        min = num2;
        max = num1;
    }

    // 3. Add numbers from num1 to num2 inclusively
    for (let i = min; i <= max; i++) {
        sum += i;
    }

    // 4. Return sum
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
