"use strict";

let userName = "John";

function showMessage() {
    userName = "Peter";
    let message = `Hello ${userName}`;
    console.log(message);
}

function showTextMessage(from, text = "Empty message") {
    from = "Anna";
    console.log(`*${from}*: ${text}`);
}

console.log(userName);
showMessage();
console.log();

showTextMessage(userName);
console.log(userName);
showTextMessage(userName, "How are you?");

function ask(question, yesFunc, noFunc) {
    if (confirm(question))  yesFunc();
    else noFunc();
}

function showOk() {
    alert("You have an access");
}

function showCancel() {
    alert("You are too young");
}

ask("Are you 18 or older?", showOk, showCancel);