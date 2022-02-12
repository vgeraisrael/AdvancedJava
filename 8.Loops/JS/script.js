"use strict";

let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 53);

for (let i = 1; true; i++){
    num++;
    console.log(num);
    if ( num == 100) break;
}