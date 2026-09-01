var prompt = require('prompt-sync')();
const km_per_hour = Number(prompt("Enter speed in km/h:"));
const m_per_second = km_per_hour * 0.27778;
console.log(`${km_per_hour} km/h = ${m_per_second} m/s`);
