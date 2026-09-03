var prompt = require('prompt-sync')();

let n = Number(prompt("enter a Number" ))

for (let i = 1 ; i <= n ; i++ ) {

    if (i % 2 == 0) { 
        console.log(i)
    }   
}


