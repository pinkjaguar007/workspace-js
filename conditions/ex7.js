var prompt = require('prompt-sync')();

let character = prompt("Enter a character:");
let ascii = character.charCodeAt(0);

if (ascii >= 65 && ascii <= 90) {
    console.log("Uppercase");
} else {
    console.log("Not uppercase");
}
