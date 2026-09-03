var prompt = require('prompt-sync')();

// let the user enter the number



let n = Number(prompt("Enter an integer:"));
let odd = 1;

for (let i = 1; i <= n; i++) {
    console.log(odd);
    odd = odd + 2;
}