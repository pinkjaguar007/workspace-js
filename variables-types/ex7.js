var prompt = require('prompt-sync')();
let num1 = prompt("Enter the first number: ");
let num2 = prompt("Enter the second number: ");
let num3 = prompt("Enter the third number: ");

let piont1 = 5 * parseInt(num1);
let point2 = 3 * parseInt(num2);
let point3 = 2 * parseInt(num3);    

let totalPoints = (piont1 + point2 + point3) / 10;
console.log(`Total points: ${totalPoints}`);
 

