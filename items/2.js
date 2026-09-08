var prompt = require('prompt-sync')();


// 1. Création de l'objet étudiant
let etudiant = {
    nom: "Martin",
    prenom: "Sophie",
    notes: [14, 16, 12, 18, 15] // La valeur est un tableau !
};


console.log(`Étudiant : ${etudiant.prenom} ${etudiant.nom}`);

console.log("Liste des notes : " + etudiant.notes.join(", "));

let somme = 0;
for (let note of etudiant.notes) {
    somme += note;
}
let moyenne = somme / etudiant.notes.length;
console.log(`Moyenne : ${moyenne}`);