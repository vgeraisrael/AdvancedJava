"use strict";

// let number = 5;
//
// function logNumber() {
//     console.log(number);
// }
//
// number = 6;
// logNumber();

function createCounter() {
    let counter = 0;
    const myFunction = function() {
        counter += 1;
        return counter;
    };
    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
const c4 = increment();

console.log(c1, c2, c3, c4);