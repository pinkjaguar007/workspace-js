var prompt = require('prompt-sync')();

let n = parseInt(prompt("Enter the number of elements: "));

let elements = prompt("Enter the elements separated by spaces: ")
    .split(" ")
    .map(Number);

let max = elements[0];

for (let i = 1; i < elements.length; i++) {

    if (elements[i] > max) {
        max = elements[i];
    }

}

console.log("The largest element is: " + max);