"use strict";

console.log(typeof(String(null)));

const num = 5;
console.log("https://vk.com/catalog/" + num);

const fontSize = 26 + 'px';

console.log(typeof(Number('4')));
console.log(typeof(+ '4'));
console.log(typeof(parseInt("15px", 10)));
console.log(parseInt("15px", 10));

// let ans = +prompt("Hello", '0');

//!Always false
//? 0, "", null, undefined, NaN

let switcher = 1;

if (switcher) {
    console.log("working");
}

console.log(typeof(Boolean('4')));

console.log(!!'4');
console.log(typeof (1 && 2));
console.log(1 && 2);

