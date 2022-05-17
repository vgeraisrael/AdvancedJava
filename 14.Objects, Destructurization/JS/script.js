"use strict";

const options = {
    name: "test",
    width: 1024,
    height: 1024,
    colors: {
        border: "black",
        bg: "red"
    },
    makeTest: function() {
        console.log("test");
    }
};

console.log(options.name);

delete options.name;
console.log(options);

for (let key in options) {
    if (typeof options[key] === 'object') {
        for (let i in options[key]) {
            console.log(`Nested Property ${i} of property ${key}  is ${options[key][i]}`);
        }
    } else {
        console.log(`Property ${key} is ${options[key]}`);
    }
}

console.log(Object.keys(options).length);
options.makeTest();

const {border, bg} = options.colors;
console.log(border);
console.log(bg);
