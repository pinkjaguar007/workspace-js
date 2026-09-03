var prompt = require('prompt-sync')();


let N = Number(prompt("Enter the number of terms:"));

let a = 0;
let b = 1;

for (let i = 0; i < N; i++) {
   

    let next = a + b;
    a = b;
    b = next;

     console.log(a);
}
