"use strict";
const pairProduct = (numbers, targetProduct) => {
    if (numbers.length < 2)
        return null;
    const numSet = new Set();
    let startingPoint = 0;
    let endingPoint = numbers.length - 1;
    while (startingPoint <= endingPoint) {
        let requiredNum = targetProduct / numbers[startingPoint];
        if (numSet.has(requiredNum))
            return [startingPoint, numbers.indexOf(requiredNum)];
        numSet.add(numbers[startingPoint]);
        if (startingPoint === endingPoint) {
            startingPoint++;
            endingPoint--;
            continue;
        }
        requiredNum = targetProduct / numbers[endingPoint];
        if (numSet.has(requiredNum))
            return [endingPoint, numbers.indexOf(requiredNum)];
        numSet.add(numbers[endingPoint]);
        startingPoint++;
        endingPoint--;
    }
    return null;
};
console.log(pairProduct([3, 2, 5, 4, 1], 8));
console.log(pairProduct([3, 2, 5, 4, 1], 10));
console.log(pairProduct([4, 7, 9, 2, 5, 1], 5));
console.log(pairProduct([4, 7, 9, 2, 5, 1], 35));
console.log(pairProduct([3, 2, 5, 4, 1], 10));
console.log(pairProduct([4, 6, 8, 2], 16));
