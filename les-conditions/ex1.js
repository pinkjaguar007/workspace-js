var prompt = require('prompt-sync')();
// 1. Saisie des nombres
let nb1 = parseFloat(prompt("Entrez le premier nombre :"));
let nb2 = parseFloat(prompt("Entrez le deuxième nombre :"));

// 2. Calculs
let somme = nb1 + nb2;
let difference = nb1 - nb2;
let produit = nb1 * nb2;
let quotient = nb1 / nb2;

// 3. Affichage
console.log(`Résultats pour ${nb1} et ${nb2} :`);
console.log(`Somme : ${somme}`);
console.log(`Différence : ${difference}`);
console.log(`Produit : ${produit}`);
console.log(`Quotient : ${quotient}`);

