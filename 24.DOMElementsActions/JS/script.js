"use script";

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll('.heart');
const oneButton = document.querySelector('.heart');

console.dir(box);
box.style.backgroundColor = "blue";
box.style.width = "500px";

buttons[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'black';

const boxWidth = 250;
box.style.cssText = `background-color: green; width: ${boxWidth}px`;

// for (let i = 0; i < circles.length; i++) {
//     circles[i].style.backgroundColor = 'purple';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'purple';
});

const div = document.createElement("div");
const text = document.createTextNode("Some text");

div.classList.add('black');
document.body.append(div);

const wrapper = document.querySelector(".wrapper");
// wrapper.append(div);
// wrapper.prepend(text);

wrapper.before(text);
wrapper.after(div);

circles[0].remove();

hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello world</h1>";
// div.textContent = "Hello world";
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>');
div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');


