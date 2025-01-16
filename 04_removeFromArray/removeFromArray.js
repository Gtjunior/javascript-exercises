const removeFromArray = function(nums, ...numsToRemove) {
    // 1. loop thru number's to be removed
    for(let i = 0; i < numsToRemove.length; i++) {
        // 2. Assign the number that needs to removed a variable
        let numToRemove = numsToRemove[i];

        // 3. Check if the number to be removed is within nums
        while(nums.indexOf(numToRemove) !== -1) {
            // 4. Assign the index of numToRemove to a variable
            let numIndex = nums.indexOf(numToRemove);
            // 5. Remove number
            nums.splice(numIndex, 1);
        }

    }
    // 6. Return nums
    return nums;
};

// Do not edit below this line
module.exports = removeFromArray;
