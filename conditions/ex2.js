
var prompt = require('prompt-sync')();
let character = prompt("Enter a character:").toLowerCase();

switch (character) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log("The character is a vowel.");
        break;

    default:
        console.log("The character is not a vowel.");
}

