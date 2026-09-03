var prompt = require('prompt-sync')();


let number = prompt("Enter a number:");
let reversed = "";

for (let i = number.length - 1; i >= 0; i--) {

    reversed = reversed + number[i];
    
}

console.log(reversed);