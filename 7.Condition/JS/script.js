"use strict";

let a = 28;
if(a == 5) {
    console.log("Ok");
} else {
    console.log("False");
}

if(a < 5) {
    console.log("Too low");
} else if(a > 5) {
    console.log("Too high");
} else {
    console.log("exactly");
}

a == 6 ? console.log("Ok") : console.log("False");

switch (a) {
    case 4:
        console.log("Less by 1");
        break;
    case 6:
        console.log("More by 1");
        break;
    case 5:
        console.log("Exact");
        break;
    default:
        console.log("not even near");
}

const hamburger = 4;
const fries = 0;
if (hamburger >= 3 && fries ) {
    console.log("Success");
} else {
    console.log("I`m Hungry");
}

console.log((1 && 5 < 3 && "f"));
console.log((1 && NaN && "f"));
console.log((null || 5 || "f"));
console.log((5 || 0));
console.log((!0));
console.log(("a" && !0));
