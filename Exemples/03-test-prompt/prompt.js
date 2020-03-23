//declaratino de variables
var name;
var firstname;
var age;

//affectation de valeur
name = prompt("Entrez votre nom :");
firstname = prompt("Entrez votre prenom :");
age = prompt("Entrez votre age :");

//affichage des donnees
alert("Vous vous appelez : " + name + " " + firstname);
alert("Vous avez : " + age + " ans");
alert("Dans 10 ans vous aurez : " + age + 10 + " ans"); //Le prompt affiche 3110, la variable est donc consideree comme du texte.
alert("Test 2... Dans 10 ans vous aurez : " + (parseInt(age) + 10) + " ans");
var age_10 = parseInt(age) + 10;
alert("Non, on rigole, vous aurez : " + age_10 + " ans!") //On est oblige de passser par une variable intermediaire.
var age_20 = age_10 + 10;
age = age + 20; //A quoi sert le parseInt du coup  ???
alert("Et 10 ans plus tard ? " + age_20 + " ans et non " + age + " ans");

