// 1. Déclarations
let primeDeBase = 500; // on part d'une base de 500€
let age = parseInt(prompt("Âge du conducteur :"));
let type = parseInt(prompt("Type (1: sportive, 2: utilitaire, 3: familiale) :"));
let accidents = parseInt(prompt("Nombre d'accidents (5 dernières années) :"));

// 2. Calcul selon l'âge
if (age < 25) {
    primeDeBase *= 1.5;
} else if (age > 65) {
    primeDeBase *= 1.2;
} // si entre 25 et 65, on ne change rien

// 3. Calcul selon le type
if (type === 1) {
    primeDeBase *= 2;
} else if (type === 2) {
    primeDeBase *= 1.2;
} else if (type === 3) {
    primeDeBase *= 1.1;
}

// 4. Calcul des accidents
if (accidents > 1) {
    primeDeBase *= 1.3; // +30%
}

// 5. Résultat
console.log(`Votre prime d'assurance sera de : ${primeDeBase} €`);