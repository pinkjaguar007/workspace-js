var prompt = require('prompt-sync')();


let numbers = [2, 5, 8, 12, 16, 23, 38, 45, 56, 72];

let number = Number(prompt("Enter a number to search:"));

let left = 0;
let right = numbers.length - 1;

let found = false;

while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (numbers[middle] === number) {
        found = true;
        break;
    } 
    else if (numbers[middle] < number) {
        left = middle + 1;
    } 
    else {
        right = middle - 1;
    }
}

if (found) {
    console.log("Number found!");
} else {
    console.log("Number not found.");
}