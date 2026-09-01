var prompt = require('prompt-sync')();
let r = parseFloat(prompt("Enter the radius of the sphere:"));

let volume = (4 / 3) * Math.PI * r ** 3;

console.log("Volume of the sphere:", volume);