
var prompt = require('prompt-sync')();

let year = Number(prompt("Enter the number of years:"));

let choice = Number(prompt(
    "Choose a conversion:\n" +
    "1. Months\n" +
    "2. Days\n" +
    "3. Hours\n" +
    "4. Minutes\n" +
    "5. Seconds"
));

switch (choice) {
    case 1:
        console.log("Months:", year * 12);
        break;

    case 2:
        console.log("Days:", year * 365);
        break;

    case 3:
        console.log("Hours:", year * 365 * 24);
        break;

    case 4:
        console.log("Minutes:", year * 365 * 24 * 60);
        break;

    case 5:
        console.log("Seconds:", year * 365 * 24 * 60 * 60);
        break;

    default:
        console.log("Invalid choice.");
}