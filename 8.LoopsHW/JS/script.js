"use strict";

//!Task 1

// for (let i = 5; i < 11; i++) {
//     console.log(i);
// }
//
// for (let i = 20; i > 10; i--) {
//     if(i === 13) {
//         break;
//     }
//     console.log(i);
// }
//
// for (let i = 2; i < 11; i++) {
//     if(i % 2 === 0) {
//         console.log(i);
//     }
// }
//
// let i = 1;
// while (i < 16) {
//     i++;
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }
//
// let array = [];
// for (let j = 0; j < 6; j++) {
//     array[j] = j + 5;
// }
// console.log(array);

//!Task2

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];
// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }
// console.log(result);
// console.log(arr);
//
// const datares = [];
// const data = [5, 10, 'Shopping', 20, 'Homework'];
//
// function changeData(datum) {
//     if(typeof datum === 'number'){
//         return datum * 2;
//     } else {
//         return datum + ' - done';
//     }
// }
//
// for (let i = 0; i < data.length; i++) {
//     datares[i] = changeData(data[i]);
// }
// console.log(datares);
// console.log(data);

//!Task3

const lines = 5;
let resultFigure = '';

for (let i = 0; i < lines; i++) {
    let maxinline = lines * 2 - 1;
    let starsinline = 1 + i * 2;
    let firstindex = (maxinline - starsinline) / 2;
    for (let j = 0; j < maxinline; j++) {
        if (j < firstindex || j > maxinline - firstindex - 1) {
            resultFigure += " ";
        } else {
            resultFigure += "*";
        }
    }
    resultFigure += "\n";
}
console.log(resultFigure);