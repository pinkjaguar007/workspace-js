var prompt = require('prompt-sync')();


let n = Number(prompt("enter n number to get the factorial "));

function factorial(n) {
    let result = 1

    for (let i = 1; i <= n; i++) {

        result *= i

            console.log(result);

    }

}

factorial(n)