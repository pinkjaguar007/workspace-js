var prompt = require('prompt-sync')();

let base = Number(prompt("enter base number "))

let exponent = Number(prompt("enter exponent number"))

let b = base;
let x = exponent;
let result = 1;
let i = 1 ;

while (i <= x) {
    result = result * base

    i++


console.log( `The result of ${b} raised to the power of ${x} is: ${result}`);

}  