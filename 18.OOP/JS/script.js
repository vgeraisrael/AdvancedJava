"use script";
/*jshint esversion: 9 */

let str = 'string';
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof (strObj));

console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log("HELLO");
    }
};

const privateJohn = Object.create(soldier);
privateJohn.health = 100;

// privateJohn.__proto__ = soldier;
Object.setPrototypeOf(privateJohn, soldier);
console.log('private John armor:' + privateJohn.armor);
console.log('private John health:' + privateJohn.health);
privateJohn.sayHello();