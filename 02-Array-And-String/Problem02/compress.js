"use strict";
const compress = (s) => {
    if (s.length === 1)
        return `1${s}`;
    const compressedArray = [];
    let currentCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (i === 0) {
            currentCount++;
            continue;
        }
        if ((i === s.length - 1) && (s.charAt(i) !== s.charAt(i - 1))) {
            if (currentCount === 1)
                compressedArray.push(`${s.charAt(i - 1)}`);
            else
                compressedArray.push(`${currentCount}${s.charAt(i - 1)}`);
            compressedArray.push(`${s.charAt(i)}`);
        }
        else if ((i === s.length - 1) && (s.charAt(i) === s.charAt(i - 1))) {
            compressedArray.push(`${currentCount + 1}${s.charAt(i)}`);
        }
        else if (s.charAt(i) !== s.charAt(i - 1)) {
            if (currentCount === 1)
                compressedArray.push(`${s.charAt(i - 1)}`);
            else
                compressedArray.push(`${currentCount}${s.charAt(i - 1)}`);
            currentCount = 1;
        }
        else {
            currentCount++;
        }
    }
    return compressedArray.join("");
};
console.log(compress('ccaaatsss'));
console.log(compress('ssssbbz'));
console.log(compress('ppoppppp'));
console.log(compress('nnneeeeeeeeeeeezz'));
console.log(compress('yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy'));
