var prompt = require('prompt-sync')();

let n = parseInt(prompt("enter a number of elements "));

let elements = prompt("enter elements")
    .split(" ")
    .map(Number);

let f = Number(prompt("enter a factor number "));

let result = []

for (let i = 0; i < elements.length; i++) {
    result.push(elements[i] * f);
}

console.log(result);


   

