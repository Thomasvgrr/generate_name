// Fonction pour générer un nom aléatoire
function genererNom() {
    // Liste des noms
    const noms = ["Thomas", "Carla", "Pierre-Damien", "Margaux", "Charlène", "Sylvain", "Alexandre", "Lucie", "Gildas", "Léa"];

    // Génération aléatoire d'un index
    const index = Math.floor(Math.random() * 10);

    // Retourner le nom choisi
    return noms[index];
}