"use strict";

let num = 0;

showFirstMessage("Hello", "world");
console.log(num);
console.log(calc(1,1));
console.log(calc(2,2));

let anotherNum = ret();
console.log(anotherNum);

// logger();
//! logger function can`t be used before initialization because it is created using
//! function expression method

function showFirstMessage(text1, text2) {
    console.log(text1 + " " + text2);
    num = 20;
//    let num = 10;
    console.log(num);
}

function calc (a, b) {
    return a + b;
}

function ret () {
    let num = 25;
    return num * 2;
}

const logger = function() {
    console.log("HELLO");
};

logger();

const calc2 = (a, b) => a + b;
console.log(calc2(3, 3));
