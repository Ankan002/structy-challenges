"use strict";
const intersection = (a, b) => {
    if (a.length === 0 || b.length === 0)
        return [];
    if (a === b)
        return a;
    const numSet = new Set(a);
    const overlappingNumbers = [];
    let startingPoint = 0;
    let endingPoint = b.length - 1;
    while (startingPoint <= endingPoint) {
        if (numSet.has(b[startingPoint]))
            overlappingNumbers.push(b[startingPoint]);
        if (startingPoint === endingPoint) {
            startingPoint++;
            endingPoint--;
            continue;
        }
        if (numSet.has(b[endingPoint]))
            overlappingNumbers.push(b[endingPoint]);
        startingPoint++;
        endingPoint--;
    }
    return overlappingNumbers;
};
console.log(intersection([4, 2, 1, 6], [3, 6, 9, 2, 10]));
console.log(intersection([2, 4, 6], [4, 2]));
console.log(intersection([4, 2, 1], [1, 2, 4, 6]));
console.log(intersection([0, 1, 2], [10, 11]));
