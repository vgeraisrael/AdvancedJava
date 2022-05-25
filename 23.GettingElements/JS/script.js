"use script";

const box = document.getElementById('box');
console.log(box);

const buttons = document.getElementsByTagName('button');
console.log(buttons[2]);

const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
console.log(hearts);
hearts.forEach(item => console.log(item));

const oneButton = document.querySelector('.box');
console.log(oneButton);