"use strict";

function calculateVolumeAndArea(cubeFace) {
    if (typeof cubeFace !== 'number' || cubeFace <= 0 || cubeFace % 1 !== 0) {
        return 'При вычислении произошла ошибка';
    }
    let volume = Math.pow(cubeFace, 3);
    let area = Math.pow(cubeFace, 2) * 6;
    return `Обьем куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('5'));
console.log(calculateVolumeAndArea(-5));

function getCoupeNumber(place) {
    if (typeof place !== 'number' || place <= 0 || place % 1 !== 0 || place > 36) {
        return 'Такого места не существует';
    }
    return (place % 4) !== 0 ? (place - place % 4) / 4 + 1 : place / 4;
}

console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(8));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber('Hello'));
console.log(getCoupeNumber(-5));

function getTimeFromMinutes(minutes) {

    let hours = (minutes - minutes % 60) / 60;
    let resMinutes = hours > 0 ? minutes - hours * 60 : minutes;
    let hoursString = hours === 1 ? 'hour' : "hours";
    let minutesString = resMinutes === 1 ? 'minute' : "minutes";

    if (typeof minutes !== 'number' || minutes < 0 || minutes % 1 !== 0 || minutes > 600) {
        return 'Error';
    }
    return `This is ${hours} ${hoursString} and ${resMinutes} ${minutesString}`;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes( -150));
console.log(getTimeFromMinutes(800));
console.log(getTimeFromMinutes(215.3));
console.log(getTimeFromMinutes(61));

function findMaxNumber(num1, num2, num3, num4) {
    let arr = [num1, num2, num3, num4];
    let result = num1;
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') {
            return 0;
        }
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}

console.log(findMaxNumber(1, 5, 6.6, 3));
console.log(findMaxNumber(1, "5", 6.6, 3));

function fib(num) {
    let result = '';
    if (typeof num !== 'number' || num < 3) {
        return result;
    }
    let arr = [0, 1];
    result = '0 1';
    let nextNum;
    for (let i = 2; i < num; i++) {
        nextNum = arr[i - 1] + arr[i - 2];
        arr[i] = nextNum;
        result += ` ${nextNum}`;
    }
    return result;
}

console.log(fib(4));
console.log(fib(7));
console.log(fib(0));
console.log(fib('4'));