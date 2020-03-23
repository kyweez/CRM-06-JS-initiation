//declaratino de variables
var var1;
var var2;
var var3;
var var4;
var var5;
var result;

//affectations de variables
var1 = 12;
var2 = 12;
var3 = 24;
var4 = prompt("Tapez 12");
var5 = prompt("Tapez 15");

//test ==
result = var1==var2;
alert("[var1==var2 avec var1 = " + var1 + " et var2 = " + var2 + " ]    result = " + result);
result = var1==var3;
alert("[var1==var3 avec var1 = " + var1 + " et var3 = " + var3 + " ]    result = " + result);
result = var1==var4;
alert("[var1==var4 avec var1 = " + var1 + " et var4 (prompt) = " + var4 + " ]    result = " + result);

//test ===
result = var1===var2;
alert("[var1===var2 avec var1 = " + var1 + " et var2 = " + var2 + " ]    result = " + result);
result = var1===var3;
alert("[var1===var3 avec var1 = " + var1 + " et var3 = " + var3 + " ]    result = " + result);
result = var1===var4;
alert("[var1===var4 avec var1 = " + var1 + " et var4 (prompt) = " + var4 + " ]    result = " + result); //affiche false car la valeur rentree en prompt est de type "text"
result = var1===parseInt(var4);
alert("[var1===parseInt(var4) avec var1 = " + var1 + " et var4 (prompt) = " + var4 + " ]    result = " + result); //affiche true car le text est transforme en nbre.

//test >
result = var1>var2;
alert("[var1>var2 avec var1 = " + var1 + " et var2 = " + var2 + " ]    result = " + result);
result = var1>var3;
alert("[var1>var3 avec var1 = " + var1 + " et var3 = " + var3 + " ]    result = " + result);
result = var1>var4;
alert("[var1>var4 avec var1 = " + var1 + " et var4 (prompt) = " + var4 + " ]    result = " + result);
result = var1>parseInt(var4);
alert("[var1>parseInt(var4) avec var1 = " + var1 + " et var4 (prompt) = " + var4 + " ]    result = " + result);

//test <
result = var1<var2;
alert("[var1<var2 avec var1 = " + var1 + " et var2 = " + var2 + " ]    result = " + result);
result = var1<var3;
alert("[var1<var3 avec var1 = " + var1 + " et var3 = " + var3 + " ]    result = " + result);
result = var1<var5;
alert("[var1<var5 avec var1 = " + var1 + " et var5 (prompt) = " + var5 + " ]    result = " + result); //fonctionne et renvoie true (ne compare pas le type ???)
result = var1<parseInt(var5);
alert("[var1<parseInt(var5) avec var1 = " + var1 + " et var5 (prompt) = " + var5 + " ]    result = " + result); //de meme.

//test !=
result = var1!=var2;
alert("[var1!=var2 avec var1 = " + var1 + " et var2 = " + var2 + " ]    result = " + result);
result = var1!=var3;
alert("[var1!=var3 avec var1 = " + var1 + " et var3 = " + var3 + " ]    result = " + result);
result = var1!=var4;
alert("[var1!=var4 avec var1 = " + var1 + " et var4 (prompt) = " + var4 + " ]    result = " + result); //return false parce que seules les valeurs sont comparees
result = var1!=parseInt(var4);
alert("[var1!=parseInt(var4) avec var1 = " + var1 + " et var4 (prompt) = " + var5 + " ]    result = " + result);

//test !==
result = var1!==var2;
alert("[var1!==var2 avec var1 = " + var1 + " et var2 = " + var2 + " ]    result = " + result);
result = var1!==var3;
alert("[var1!==var3 avec var1 = " + var1 + " et var3 = " + var3 + " ]    result = " + result);
result = var1!==var4;
alert("[var1!==var4 avec var1 = " + var1 + " et var4 (prompt) = " + var4 + " ]    result = " + result); //return true parce que les types ne sont pas les memes
result = var1!==parseInt(var4);
alert("[var1!==parseInt(var4) avec var1 = " + var1 + " et var4 (prompt) = " + var5 + " ]    result = " + result);//return false parce que ce sont bien 2 nbres qui sont compares