"use strict";
const isPrime = (n) => {
    if (n < 2)
        return false;
    if (n === 2)
        return true;
    let startingPoint = 2;
    let endingPoint = Math.ceil(Math.sqrt(n));
    while (startingPoint <= endingPoint) {
        if ((n % startingPoint === 0) || (n % endingPoint === 0))
            return false;
        startingPoint++;
        endingPoint--;
    }
    return true;
};
console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(6));
console.log(isPrime(7));
console.log(isPrime(8));
console.log(isPrime(25));
console.log(isPrime(31));
console.log(isPrime(2017));
console.log(isPrime(2048));
console.log(isPrime(1));
console.log(isPrime(713));
