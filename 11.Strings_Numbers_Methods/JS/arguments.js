"use strict";

const usdExchangeRate = 3.4;
const euroExchangeRate = 3.9;
const discount = 0.9;

function convert(amount, exchangeRate) {
    return exchangeRate * amount;
}

function promotion(sum) {
    return sum * discount;
}

// convert(500, usdExchangeRate);
// convert(500, euroExchangeRate);


console.log(promotion(convert(500, usdExchangeRate)));

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if(i === 3) {
            return;
        }
    }
    console.log("done");
}

test();

function sayHelloTo(name) {
    return `Hello ${name}`;
}

console.log(sayHelloTo("Anton"));

function createArrayFromNumber(number) {
    const array = [];
    let num = number - 1;
    for (let i = 0; i < 3; i++) {
        array[i] = num++;
    }
    return array;
}

console.log(createArrayFromNumber(5));

function createProgressionString(base, proggression) {
    if (typeof proggression !== 'number' || proggression < 1) {
        return base;
    }

    let result = '';

    for (let i = 1; i <= proggression; i++) {
        result += base * i;
        if (i !== proggression) {
            result += '---';
        }
    }

    return result;
}

console.log(createProgressionString(5, 3));
console.log(createProgressionString(3, 10));
console.log(createProgressionString(10, '5'));
console.log(createProgressionString(5, 0));


