"use strict";

let anabell = {
    name: "Anabel",
    age: 18,
    "like birds": true,
};
console.log(anabell["like birds"]);

let key = "like birds";
console.log(anabell[key]);

// let fruit = prompt("Enter fruit name", null);
// let quantityOfFruit = prompt(`How much kilo of ${fruit} did you buy?`, 0);
// let bag = {
//     [fruit]: [quantityOfFruit],
// };
// alert(Object.keys(bag)[0] + " - " + bag[fruit] + " kg.");

function makeUser(name, age) {
    return {
        name, //* if name of property and name of a variable is the same you can use such shortcut
        age,
    };
}

console.log(makeUser("John", 50));
console.log(("age" in anabell));
console.log(("married" in anabell));

for (const key in anabell) {
    console.log(key);
}

function objectEmptinessCheck(obj) {
    return Object.keys(obj).length < 1;
}

console.log(objectEmptinessCheck(anabell));
console.log(objectEmptinessCheck(new Object()));

let jorge = {
    name: "Jorge",
    age: 22,
    sayHi() {
        console.log(`Hi, I am ${this.name}`);
    },
};
jorge.sayHi();

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showSteps() {
        console.log(this.step);
        return this;
    },
};

ladder.up().up().showSteps();

let [a, b, c, d] = "tric"; //!  internally a destructuring assignment works by iterating over the right value
console.log(a);
console.log(b);
console.log(c);
console.log(d);

const destObject = {
    name: "Brad",
    age: 60,
    married: true,
};

let newDestObj = {};
for (let [key, value] of Object.entries(destObject)) {
    key += "!";
    value += "!";
    newDestObj[key] = value;
}
for (const newDestObjKey in newDestObj) {
    let i = 0;
    console.log(`${Object.keys(newDestObj)[i]}: ${newDestObj[newDestObjKey]}`);
}

let options = {
    title: "Menu",
    width: 100,
    height:200,
};

let {height, title, width} = options;
console.log(height);
console.log(title);
console.log(width);

let objWithNestedProperties = {
    colors: {
        1: "black",
        2: "white"
    },
};

let { colors: {1: firstColor, 2: secondColor},} = objWithNestedProperties;

console.log(firstColor);
console.log(secondColor);

let todayMenu = {
    day: "Sunday",
    // menu: "Complex diner",
    // price: 123.00,
    chefsDish: "Pasta"
};

function showMenu({day = "Monday", menu = "Complex diner", price = 123.00, /*chefsDish*/}) {
    console.log(`On ${day} we offer you ${menu} for just a ${price} NIS!`);
    // console.log(`You can also order ${chefsDish} from our chef)`);
}

showMenu(todayMenu);

let user = {
    name: "John",
    years: 30
};

let {name, years: age, isAdmin = false} = user;
console.log(name);
console.log(age);
console.log(isAdmin);

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

// console.log(Object.entries(salaries));
function topSalary(salaries) {
    let res = null;
    let sal = 0;
    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > sal) {
            sal = salary;
            res = name;
        }
    }
    return res;
}

console.log(topSalary(salaries));