var age = parseInt(prompt("Quel age avez-vous ?"));
if (age<1){
    alert("Vous n'etes pas né ?");
}
else if (age>120){
    alert("Vous etes trop vieux !");
}
else{
    alert(age>11?(age>17?"Vous êtes un adulte.":"Vous êtes un adolescent."):(age>6?"Vous êtes un enfant qui a atteint l'âge de raison.":"Vous êtes un jeune enfant."));
}
