//Creation du tableau
var name_array = [];

//Remplissage du tableau
for(var i=0; true; i++){
    name_array[i] = prompt("Veuillez saisir un prenom");
    if (name_array[i]){
        if(confirm("Voulez vous continuer a saisir des prenoms ?"))
            i++;
        else
            break;
    }
    else
        break;
}

//Affichage du resultat
if (name_array[0] == ""){
    alert("vous n'avez pas saisi de prenom");
}
else{
    var name_string = name_array.join(" ");
    alert("Vous avez saisi le(s) nom(s) suivant(s) : " + name_string);
}