var prompt = require('prompt-sync')();

let a = Number(prompt("enter the first number a : "))
let b = Number(prompt("enter the second number b : "))


let maxcheck = function (a, b) {
 
    if (a < b)
        console.log("b :" + b)
    else if (b < a) {

        console.log(" a " + a)
    }

    else {

        console.log("voila : a = b ")
    }


}

maxcheck(a,b);

