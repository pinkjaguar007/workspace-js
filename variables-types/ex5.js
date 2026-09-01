var prompt = require('prompt-sync')();
const temperature_celsius = Number(prompt("Enter temperature in Celsius:"));
if (temperature_celsius < 0) {
    console.log("Solid");
} else if (temperature_celsius >= 0 && temperature_celsius < 100) {
    console.log("Liquid");
} else {temperature_celsius >= 100
    console.log("Gas");
}
