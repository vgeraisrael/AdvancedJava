"use script";
/*jshint esversion: 9 */

let a = 5;
let b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};
const copy = obj;

copy.a = 10;
console.log(copy);
console.log(obj);

function copyObj(mainObj){
    let objCopy = {};
    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 9,
        y: 10
    }
};

let numbersCopy = copyObj(numbers);

numbersCopy.c.x = 10;

console.log(numbersCopy);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

console.log(Object.assign(numbers, add));
let clone = Object.assign({}, add);
clone.d = 100;
console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'Hello world';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['livejournal', 'wordpress', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function doLog(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7, 9];
doLog(...num);

const arrayOneElse = ['a', "b"];
const newElseArray = [...arrayOneElse];
console.log(newElseArray);

const newObj = {...add};
console.log(newObj);