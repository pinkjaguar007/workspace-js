var prompt = require('prompt-sync')();
// 1 et 2. Demander la température et la convertir en nombre
let tempCelsius = parseFloat(prompt("Entrez la température en Celsius :"));

// 3. Calcul de la température en Kelvin
let tempKelvin = tempCelsius + 273.15;

// Affichage
console.log(`${tempCelsius}°C correspond à ${tempKelvin}K`);