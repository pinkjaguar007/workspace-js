var prompt = require('prompt-sync')();

// let the user enter the number

let base = Number(prompt("Enter an integer base :"))
let exponent = Number(prompt("Enter an integer exponent :"))

let result = 1 

for (let i = 1; i <= exponent; i++)

{
result *= base 

}

// WE REPEAT RESULT *= BASE BY for (let i = 1; i <= exponent; i++) WHICH IS HOW MANY TIMES


console.log(result);