 var prompt = require('prompt-sync')();
 let a = parseFloat(prompt("Enter a:"));
 let b = parseFloat(prompt("Enter b:"));   
 let c = parseFloat(prompt("Enter c:"));

 let number =  Math.sqrt(a * b * c ) 
 console.log(`The square root of the product is: ${number}`);
 
