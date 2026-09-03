var prompt = require('prompt-sync')();

// let the user enter the number

let N = Number(prompt("Enter an integer N :"))

let result = 2

for (let i = result ; i <= N; i++) {
    console.log(i * 2);
}
