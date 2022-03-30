"use strict";
const mostFrequentChar = (s) => {
    var _a;
    if (s.length <= 0)
        return null;
    if (s.length < 2)
        return s.charAt(0);
    const characterMap = new Map();
    let startingPoint = 0;
    let endingPoint = s.length - 1;
    while (startingPoint <= endingPoint) {
        let numberOfOccurences = characterMap.get(s.charAt(startingPoint));
        if (numberOfOccurences === undefined) {
            characterMap.set(s.charAt(startingPoint), 1);
        }
        else {
            characterMap.set(s.charAt(startingPoint), numberOfOccurences + 1);
        }
        if (startingPoint === endingPoint) {
            startingPoint++;
            endingPoint--;
            continue;
        }
        numberOfOccurences = characterMap.get(s.charAt(endingPoint));
        if (numberOfOccurences === undefined) {
            characterMap.set(s.charAt(endingPoint), 1);
        }
        else {
            characterMap.set(s.charAt(endingPoint), numberOfOccurences + 1);
        }
        startingPoint++;
        endingPoint--;
    }
    let currentHighest = [null, null];
    for (let valuePair of characterMap) {
        if (currentHighest[0] === null && currentHighest[1] === null) {
            currentHighest[0] = valuePair[0];
            currentHighest[1] = valuePair[1];
        }
        else if (currentHighest[1] !== null && valuePair[1] > currentHighest[1]) {
            currentHighest[0] = valuePair[0];
            currentHighest[1] = valuePair[1];
        }
    }
    return (_a = currentHighest[0]) !== null && _a !== void 0 ? _a : "";
};
console.log(mostFrequentChar("bookeeper"));
console.log(mostFrequentChar("david"));
console.log(mostFrequentChar("abby"));
console.log(mostFrequentChar("mississippi"));
console.log(mostFrequentChar("potato"));
console.log(mostFrequentChar("eleventennine"));
console.log(mostFrequentChar("riverbed"));
