var prompt = require('prompt-sync')();

let number = parseInt(prompt("Enter a four-digit number:"));

let d1 = number % 10;
let d2 = Math.floor(number / 10) % 10;
let d3 = Math.floor(number / 100) % 10;
let d4 = Math.floor(number / 1000);

let reverse = d1 * 1000 + d2 * 100 + d3 * 10 + d4;

console.log("Reverse:", reverse);