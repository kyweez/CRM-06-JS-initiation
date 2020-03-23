//declaratino de variables
var variable_1 = 0;
var variable_2 = 1;
var variable_3 = 2;
var variable_4 = 3;
var result;

//test addition
result = variable_1 + variable_2;
alert("Addition : " + variable_1 + " + " + variable_2 + " = " + result);

//test soustraction
result = variable_3 - variable_4;
alert("Soustraction : " + variable_3 + " - " + variable_4 + " = " + result);

//test division
result = variable_4 / variable_3;
alert("Division : " + variable_4 + " / " + variable_3 + " = " + result); //Resultat = 1,5 et non 1 (comme dans d'autres langages)

//test multiplication
result = variable_3 * variable_3;
alert("Multiplication : " + variable_3 + " * " + variable_3 + " = " + result);

//test modulo
result = variable_4 % variable_3;
alert("Modulo : " + variable_4 + " % " + variable_3 + " = " + result);

//test division par 0
result = variable_4 / variable_1;
alert("Division par 0 : " + variable_4 + " % " + variable_1 + " = " + result); //Resultat = infinity et non pas impossible.

//test puissances
result = variable_4 ^ variable_3;
alert("Puissance : " + variable_4 + " ^ " + variable_3 + " = " + result); //Resultat = 1 ????

//test avec des gros nombres
variable_3 = 9999999999999999999999999999;
variable_4 = 8888888888888888888888888888;
result = variable_4 * variable_3;
alert("Modulo : " + variable_4 + " * " + variable_3 + " = " + result); // Modulo : 8.888888888888888e+27 * 1e+28 = 8.888888888888888e+55

//test resolution du calcul dans la fonction alert();
alert("Test de resolution directement dans la fonction alert(); : \n" + variable_2 + " * " + variable_1 + " = " + variable_2*variable_1);