"use strict";
const uncompress = (s) => {
    const NUMBERS = '0123456789';
    const returningStringArray = [];
    let currentNum = 0;
    for (let character of s) {
        if (NUMBERS.includes(character)) {
            currentNum = (currentNum * 10) + parseInt(character);
        }
        else {
            let startingPoint = 1;
            while (startingPoint <= currentNum) {
                returningStringArray.push(character);
                if (startingPoint === currentNum) {
                    startingPoint++;
                    currentNum--;
                    continue;
                }
                returningStringArray.push(character);
                startingPoint++;
                currentNum--;
            }
            currentNum = 0;
        }
    }
    return returningStringArray.join("");
};
console.log(uncompress("2c3a1t"));
console.log(uncompress("4s2b"));
console.log(uncompress("2p1o5p"));
console.log(uncompress("3n12e2z"));
console.log(uncompress("127y"));
