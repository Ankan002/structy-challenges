"use strict";
const pairSum = (numbers, targetSum) => {
    if (numbers.length < 2)
        return null;
    let startingPoint = 0;
    let endingPoint = numbers.length - 1;
    const NumSet = new Set();
    while (startingPoint <= endingPoint) {
        let requiredNumber = targetSum - numbers[startingPoint];
        if (NumSet.has(requiredNumber))
            return [startingPoint, numbers.indexOf(requiredNumber)];
        NumSet.add(numbers[startingPoint]);
        if (startingPoint === endingPoint) {
            startingPoint++;
            endingPoint--;
            continue;
        }
        requiredNumber = targetSum - numbers[endingPoint];
        if (NumSet.has(requiredNumber))
            return [endingPoint, numbers.indexOf(requiredNumber)];
        NumSet.add(numbers[endingPoint]);
        startingPoint++;
        endingPoint--;
    }
    return null;
};
console.log(pairSum([3, 2, 5, 4, 1], 8));
console.log(pairSum([4, 7, 9, 2, 5, 1], 5));
console.log(pairSum([4, 7, 9, 2, 5, 1], 3));
console.log(pairSum([1, 6, 7, 2], 13));
console.log(pairSum([9, 9], 18));
console.log(pairSum([6, 4, 2, 8], 12));
