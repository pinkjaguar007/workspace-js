var prompt = require('prompt-sync')();
const km = Number(prompt("Enter kilometers:"));
const yards = km * 1093.61;

console.log(`${km} km = ${yards} yards`);
