// Fonction pour générer un nom aléatoire
function genererNom() {
    // Liste des noms
    const noms = ["Thomas", "Carla", "Pierre-Damien", "Margaux", "Charlène", "Sylvain", "Alexandre", "Lucie", "Gildas", "Léa"];

    // Génération aléatoire d'un index
    const index = Math.floor(Math.random() * 10);

    // Retourner le nom choisi
    return noms[index];
}

// Fonction pour générer un nom de personnage aléatoire
function genererNomPersonnage() {
    const consonnes = "bcdfghjklmnpqrstvwxyz";
    const voyelles = "aeiou";
    const longueurNom = Math.floor(Math.random() * 3) + 3; // Entre 3 et 5 lettres

    let nom = "";

    // Ajoute des lettres au nom, en alternant consonnes et voyelles
    for (let i = 0; i < longueurNom; i++) {
        if (i % 2 === 0) {
            nom += consonnes.charAt(Math.floor(Math.random() * consonnes.length));
        } else {
            nom += voyelles.charAt(Math.floor(Math.random() * voyelles.length));
        }
    }

    // Retourne le nom généré
    return nom.charAt(0).toUpperCase() + nom.slice(1);
}