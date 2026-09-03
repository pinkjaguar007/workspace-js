var prompt = require('prompt-sync')();

let n = Number(prompt("Enter the number :"));

let a = 0;
let b = 1;

for (let i = 0; i < n; i++) {
    console.log(a);

    let next = a + b;
    a = b;
    b = next;
}