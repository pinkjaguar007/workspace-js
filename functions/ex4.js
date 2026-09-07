

var prompt = require('prompt-sync')();

let a = Number(prompt("enter the first number a : "))
let b = Number(prompt("enter the second number b : "))


let mincheck = function (a, b) {
 
    if (a < b)
        console.log("a :" + a)
    else if (b < a) {

        console.log(" b " + b)
    }

    else {

        console.log("voila : a = b ")
    }


}

mincheck(a,b);