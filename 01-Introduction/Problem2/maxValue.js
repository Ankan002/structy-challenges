"use strict";
const maxValue = (nums) => {
    if (nums.length === 1)
        return nums[0];
    let startingPoint = 0;
    let endingPoint = nums.length - 1;
    let currentHighest = nums[startingPoint];
    while (startingPoint <= endingPoint) {
        if ((nums[startingPoint] >= currentHighest) && (nums[startingPoint] >= nums[endingPoint]))
            currentHighest = nums[startingPoint];
        else if (nums[endingPoint] >= currentHighest)
            currentHighest = nums[endingPoint];
        startingPoint++;
        endingPoint--;
    }
    return currentHighest;
};
console.log(maxValue([4, 7, 2, 8, 10, 9]));
console.log(maxValue([10, 5, 40, 40.3]));
console.log(maxValue([-5, -2, -1, -11]));
console.log(maxValue([42]));
console.log(maxValue([1000, 8]));
console.log(maxValue([1000, 8, 9000]));
console.log(maxValue([2, 5, 1, 1, 4]));
