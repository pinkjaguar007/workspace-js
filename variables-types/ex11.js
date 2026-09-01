var prompt = require('prompt-sync')();
let longueur = parseFloat(prompt("Entrez la longueur du rectangle :"));
let largeur = parseFloat(prompt("Entrez la largeur du rectangle :"));

let surface = longueur * largeur;

console.log("La surface du rectangle est :", surface);