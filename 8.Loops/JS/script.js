"use strict";

// let num = 50;
//
// while (num < 55) {
//     console.log(num);
//     num++;
// }
//
// do {
//     console.log(num);
//     num++;
// }
// while (num < 53);
//
// for (let i = 1; true; i++){
//     num++;
//     console.log(num);
//     if ( num === 100) {
//         break;
//     }
// }

for (let i = 0; i < 3; i++) {
    console.log(i);
    for (let j = 0; j < 3; j++) {
        console.log(j);
    }
}

let result = '';
for (let i = 0; i < 6; i++) {
    result += '*';
    console.log(result);
}

result = '';
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

first: for (let i = 0; i < 3; i++) {
    console.log(`first level ${i}`);
    for (let j = 0; j < 3; j++) {
        console.log(`second level ${j}`);
        for (let k = 0; k < 3; k++) {
            if(k === 2) {
                continue first;
            }
            console.log(`third level ${k}`);
        }
    }
}