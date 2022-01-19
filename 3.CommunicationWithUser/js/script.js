"use strict";
/*global remover*/

alert("Hello");

const res = confirm("Are you here?");
console.log(res);

const answer = prompt("What is your age?", "18");
console.log(answer);
//!Dynamic typing!
console.log(typeof(answer)); //string
console.log((answer + 5)); //string; result of concat - 105
console.log((answer * 5)); //string; result - 50, Dynamic typing in work

const answers = [];
answers[0] = prompt("What is your name", "unknown");
answers[1] = prompt("Are you a male or female?", "male");
answers[2] = answer;

console.log(answers);

window.document.write(answers);
window.document.write(typeof(answer));

