"use strict";

let number = 4; //number
let number2 = 4.8;

console.log(4/0); //infinity
console.log("a"/3); //NaN

const person = "Alex"; //string, primitive type
const stringNumber = "45"; //string, not a number
console.log(stringNumber/3); //but we will receive a numeric result because
// of casting to number;

const bool = true; //boolean, primitive

try {
    console.log(something);
} catch (e) {
    console.log(e.toString()); //hiden null or object doesn`t exist
}

let und;
console.log(und); // undefined or this variable doesn`t have any value

const obj =  {
  name: "John", // object properties syntax
    age: 35,
    isMarried: false
};

console.log(obj.name); //access to object`s field
console.log(obj["name"]); //less correct way to appeal to object`s field

let arr = ["a", "b", "c"]; // array
console.log(arr);           //!array is an object in JS
console.log(arr[1]);