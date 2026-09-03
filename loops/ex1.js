var prompt = require('prompt-sync')();

// 1. Saisie du nombre

let n = parseInt(prompt("Entrez le nombre pour la table de multiplication :"));

console.log(`Table de multiplication de ${n} :`);

// 2. Boucle for de 1 à 10
for (let i = 1; i <= 10; i++) {
    let resultat = n * i;
    
    // 3. Affichage du calcul
    console.log(`${n} * ${i} = ${resultat}`); }