var drawer = parseInt(prompt('Choisissez le tiroir à ouvrir (1 à 4) :')); //on précise bien le type de la valeur, ici un nombre avec la fonction parseInt()
switch (drawer) {
    case 1: // on pose chaque cas l'un après l'autre ; on met des apostrophes si l'on vérifie des chaînes de caractères au lieu de nombres
        alert("Contient divers outils pour dessiner : du papier, des crayons, etc.");
        break; // on arrête la fonction pour passer à un autre cas
    case 2:
        alert("Contient du matériel informatique : des câbles, des composants, etc.");
        break;
    case 3:
        alert("Ah ? Ce tiroir est fermé à clé ! Dommage !");
        break;
    case 4:
        alert('Contient des vêtements : des chemises, des pantalons, etc.');
        break;
    default: // on pose une autre possibilité, pour gérer une erreur de l'utilisateur
        alert("Info du jour : le meuble ne contient que 4 tiroirs et, jusqu'à preuve du contraire, les tiroirs négatifs n'existent pas.");
}
