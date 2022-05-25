"use strict";

let fruits = ["apple", "grape", "orange"];
//! .at(-1) notation is used to treat element counting from the end
console.log(fruits.at(-1));

//!For arrays we usually use for...of loops
for (const fruit of fruits) {
    console.log(fruit);
}
//!Using for..in loops with arrays could cause such problems as:
// a) Underproductivity
// b) Iteration of unneeded properties

//! To create an array of the given length you should use syntax:
let cars = new Array(4);
for (let j = 0; j < cars.length; j++) {
    cars[j] = "car" + j;
}

console.log(cars);

//? Splice method
let stringArray = [7, 5, 3, 8, 6, 4];

stringArray.splice(1, 2);
console.log(stringArray); //[ 7, 8, 6, 4 ]   2 elements starting from index [1] were deleted

stringArray.splice(1, 2, "newItem1", "newItem2");
console.log(stringArray); // [ 7, 'newItem1', 'newItem2', 4 ]  2 elements starting from index [1] were replaced with
                          // items from 3rd and 4th arguments

stringArray.splice(1, 0, "addedItem 1");
console.log(stringArray); // [ 7, 'addedItem 1', 'newItem1', 'newItem2', 4 ] - no elements were deleted, at index [1]
                          // was added new element

//!negative indexes is allowed
stringArray.splice(-1, 0, "addedItem2");
console.log(stringArray);
// [ 7, 'addedItem 1', 'newItem1', 'newItem2', 'addedItem2', 4 ]

stringArray.splice(-0, 0, "addedItem3");
console.log(stringArray);
//! We couldn`t use -0 index. Compiler recognize it as standart 0
// ['addedItem3', 7, 'addedItem 1', 'newItem1', 'newItem2', 'addedItem2', 4 ]

//? Slice method
let stringArrayCopy = stringArray.slice(1, 3);
console.log(stringArrayCopy); //[ 7, 'addedItem 1' ]

//? Concat method
let arrayExtended = stringArrayCopy.concat(2, 3);
console.log(arrayExtended); //[ 7, 'addedItem 1', 2, 3 ]

//? forEach method
stringArrayCopy.forEach(a => console.log((a + "!")));
console.log(stringArrayCopy);

//? filter method
let filteredArray = arrayExtended.filter(i => typeof i === 'number');
console.log(filteredArray); //[ 7, 2, 3 ]

//? map method
let mappedArray = filteredArray.map(item => item += 1);
console.log(mappedArray);

//? sort method
//!The items are sorted as strings by default.

let workers = new Array(5);
let id = 111;
let workerNames = ["James", "Li", "Ester", "Alexander", "Bob"];

for (let i = 0; i < workers.length; i++) {
    workers[i] = {
        workerId: id++,
        name: workerNames[i],
    };
}

console.log(workers);
// workers[3].workerId = 10000;
workers.sort((a, b) => a.name.length - b.name.length);
// workers.sort();
console.log(workers);

//? split and join methods

let addresses = "youtube.com, facebook.com, google.com"
let addressArray = addresses.split(", ");
for (const string of addressArray) {
    console.log(string.trim());
}
console.log(Array.isArray(addressArray));

addressArray.push("wordpress.com");
let newAddressString = addressArray.join("; ") + ".";
console.log(newAddressString);

//? reduce method
let sumLettersOfAddresses = addressArray.reduce((sum, item) => sum + item.length, 0);
console.log(sumLettersOfAddresses);

let emptyArray = new Array(10);
emptyArray.fill(8, 0, 8);
console.log(emptyArray);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

emptyArray.copyWithin(8, 0, 2);
console.log(emptyArray);
console.log(emptyArray.length);

let multyArray = [[1, 3, 5],
                  [2, 4, 6],
                  [10, 100, 1000]];
let simpleArray = multyArray.flat(1);
console.log(simpleArray);

function filterRange(array, min, max) {
    let res = [];
    for (const key in array) {
        if (key >= min && key < max) {
            res.push(+key);
        }
    }
    return res;
}

console.log(filterRange(simpleArray, 2, 6));

function Calculator() {

    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str) {

        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}

let calc = new Calculator();
console.log(calc.calculate("1 + 2"));


