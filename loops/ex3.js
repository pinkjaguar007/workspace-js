var prompt = require('prompt-sync')();
// let the user enter the number
let n = parseInt(prompt("Entrez le nombre  :"));
//
let sum = 0 ;

for(let i = 1 ; i<= n ; i++)
{   
    sum += i;

} 

console.log( sum );

