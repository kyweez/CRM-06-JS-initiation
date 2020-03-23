//test de while
var lettre = prompt("Tapez une lettre (A-Z)");
var result = "";
var i = 0;
var to_find = parseInt(prompt("Tapez un nombre entre 0 et 50"));
if (to_find < 1 || to_find > 50) {
    alert("Mauvais nombre")
} else {
    while (i < to_find) {
        result += lettre;
        i++;
    }
    alert("Resultat : " + result);
}

//test de break (stopper une boucle)
var liste_prenoms = ""
var prenom;
while (true){
    prenom = prompt("Entrez un prénom :");
    if (prenom) //ON PEUT NE PAS METTRE LES {}
        liste_prenoms += prenom + " "; // Ajoute le nouveau prénom ainsi qu'une espace
    else
        break; // On quitte la boucle
}
alert(liste_prenoms); // Affiche les prénoms à la suite 

//test de for
var article;
var list_courses = "";
for (var j = 0 ; true; i++){
    article = prompt("Saisissez un article pour les courses :");
    if (article){
        list_courses += article + " ";
        j++;
    }
    else
        break;
}
alert("Vous avez saisi " + j + " articles qui sont les suivants : " + list_courses);