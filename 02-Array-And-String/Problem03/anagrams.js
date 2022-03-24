"use strict";
const anagrams = (s1, s2) => {
    if (s1.length !== s2.length)
        return false;
    const alphabetMap = new Map();
    let startingPoint = 0;
    let endingPoint = s2.length - 1;
    while (startingPoint <= endingPoint) {
        let currentCount = alphabetMap.get(s1.charAt(startingPoint));
        if (currentCount === undefined)
            alphabetMap.set(s1.charAt(startingPoint), 1);
        else
            alphabetMap.set(s1.charAt(startingPoint), currentCount + 1);
        if (startingPoint === endingPoint) {
            startingPoint++;
            endingPoint--;
            continue;
        }
        currentCount = alphabetMap.get(s1.charAt(endingPoint));
        if (currentCount === undefined)
            alphabetMap.set(s1.charAt(endingPoint), 1);
        else
            alphabetMap.set(s1.charAt(endingPoint), currentCount + 1);
        startingPoint++;
        endingPoint--;
    }
    startingPoint = 0;
    endingPoint = s2.length - 1;
    while (startingPoint <= endingPoint) {
        let currentCount = alphabetMap.get(s2.charAt(startingPoint));
        if (currentCount === undefined || currentCount <= 0)
            return false;
        else
            alphabetMap.set(s2.charAt(startingPoint), currentCount - 1);
        if (startingPoint === endingPoint) {
            startingPoint++;
            endingPoint--;
            continue;
        }
        currentCount = alphabetMap.get(s2.charAt(endingPoint));
        if (currentCount === undefined || currentCount <= 0)
            return false;
        else
            alphabetMap.set(s2.charAt(endingPoint), currentCount - 1);
        startingPoint++;
        endingPoint--;
    }
    return true;
};
console.log(anagrams('restful', 'fluster'));
console.log(anagrams('cats', 'tocs'));
console.log(anagrams('monkeyswrite', 'newyorktimes'));
console.log(anagrams('paper', 'reapa'));
console.log(anagrams('elbow', 'below'));
console.log(anagrams('tax', 'taxi'));
console.log(anagrams('taxi', 'tax'));
console.log(anagrams('night', 'thing'));
console.log(anagrams('abbc', 'aabc'));
