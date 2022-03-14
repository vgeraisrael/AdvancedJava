"use strict";

const str = "test";
const arr = [1, 2, 3];

console.log(str.length);
console.log(arr.length);

console.dir(String);

console.log(str[2]);
//!str[2] = 'd';
console.log(str);

str.toUpperCase();
console.log(str);
console.log(str.toUpperCase());

let fruit = "some fruit";
console.log(fruit.indexOf("fruit"));
console.log(fruit.indexOf("apple"));

const logg = "Hello world";
console.log(logg.slice(6, 11));
console.log(logg.slice(6));
console.log(logg.slice(0, -1));

console.log(logg.substring(0, 5));

console.log(logg.substr(6, 5)); //? second argument is showing how many symbols
//? we should take, starting from index, that is passed as first argument;

let num = 5.6;
console.log(num);
console.log(Math.round(num));

console.log(parseInt(num));


