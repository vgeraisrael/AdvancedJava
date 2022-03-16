"use strict";

const arr = [1, 2, 3, 6, 8];

arr.pop();
console.log(arr);

let compareNum = (a, b) => b - a;
arr.push(10)
arr.sort(compareNum);
arr.sort((a,b) => a - b);
console.log(arr);

// function compareNum(a, b) {
//     return b - a;
// };

arr.unshift(0);

for(let value of arr){
    console.log(value);
}

// arr[99] = 0;
// console.log(arr.length);

arr.forEach(a => console.log(a + "x, "));
// console.log(arr2);

// const str = "orange, apple, banana";
// const products = str.split(", ");
// products.sort();
// console.log(products.join(" "));