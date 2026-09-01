var prompt = require('prompt-sync')();


const x1 = Number(prompt("let the user enter the number: "));
const y1 = Number(prompt("let the user enter the number: "));
const z1 = Number(prompt("let the user enter the number: "));


const x2 = Number(prompt("let the user enter the number: "));
const y2 = Number(prompt("let the user enter the number: "));
const z2 = Number(prompt("let the user enter the number: "));

const distance = Math.sqrt(
    (x2 - x1) ** 2 +
    (y2 - y1) ** 2 +
    (z2 - z1) ** 2
);

console.log(distance);


