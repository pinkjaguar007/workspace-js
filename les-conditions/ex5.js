var prompt = require('prompt-sync')();

 // 1 year = 365 days
 // 1 month = 30 days
 //1 day = 24 hours
 //1 hour = 60 minutes
 //1 minute = 60 seconds

let value = Number(prompt("Enter the value: "));

console.log("\nChoose the unit you are converting FROM:");
console.log("1. Years");
console.log("2. Months");
console.log("3. Days");
console.log("4. Hours");
console.log("5. Minutes");
console.log("6. Seconds");

let from = Number(prompt("Enter your choice: "));

console.log("\nChoose the unit you are converting TO:");
console.log("1. Years");
console.log("2. Months");
console.log("3. Days");
console.log("4. Hours");
console.log("5. Minutes");
console.log("6. Seconds");

let to = Number(prompt("Enter your choice: "));




let seconds;

switch (from) {
    case 1:
        seconds = value * 365 * 24 * 60 * 60;
        break;

    case 2:
        seconds = value * 30 * 24 * 60 * 60;
        break;

    case 3:
        seconds = value * 24 * 60 * 60;
        break;

    case 4:
        seconds = value * 60 * 60;
        break;

    case 5:
        seconds = value * 60;
        break;

    case 6:
        seconds = value;
        break;

    default:
        console.log("Invalid FROM choice!");
        process.exit();
}



let result;

switch (to) {
    case 1:
        result = seconds / (365 * 24 * 60 * 60);
        break;

    case 2:
        result = seconds / (30 * 24 * 60 * 60);
        break;

    case 3:
        result = seconds / (24 * 60 * 60);
        break;

    case 4:
        result = seconds / (60 * 60);
        break;

    case 5:
        result = seconds / 60;
        break;

    case 6:
        result = seconds;
        break;

    default:
        console.log("Invalid TO choice!");
        process.exit();
}

console.log("\nResult =", result);


