//declaratino de variables
var var1;
var var2;
var var3;
var var4;
var var5;
var var6;
var result;

//affectations de variables
var1 = true;
var2 = false;
var3 = true;
var4 = false;
var5 = prompt("Tapez true");
var6 = prompt("Tapez false");

//test ||
result = var1||var2;
alert("[Test var1||var2 avec var1 = " + var1 + " et var2 = " + var2 + " ] ------ result = " +result);
result = var1||var3;
alert("[Test var1||var3 avec var1 = " + var1 + " et var3 = " + var3 + " ] ------ result = " +result);
result = var1||var5;
alert("[Test var1||var5 avec var1 = " + var1 + " et var5 (prompt) = " + var5 + " ] ------ result = " +result);
result = var1||var6;
alert("[Test var1||var6 avec var1 = " + var1 + " et var6 = " + var6 + " ] ------ result = " +result);
result = var2||var3;
alert("[Test var2||var3 avec var2 = " + var2 + " et var3 = " + var3 + " ] ------ result = " +result);
result = var2||var5;
alert("[Test var2||var5 avec var2 = " + var2 + " et var5 (prompt) = " + var5 + " ] ------ result = " +result); //Considere le prompt "true" comme une bonne valeur booleene... WTF le JS
result = var2||var6;
alert("[Test var2||var6 avec var2 = " + var2 + " et var6 = " + var6 + " ] ------ result = " +result);

//test &&
result = var1&&var2;
alert("[Test var1&&var2 avec var1 = " + var1 + " et var2 = " + var2 + " ] ------ result = " +result);
result = var1&&var3;
alert("[Test var1&&var3 avec var1 = " + var1 + " et var3 = " + var3 + " ] ------ result = " +result);
result = var1&&var5;
alert("[Test var1&&var5 avec var1 = " + var1 + " et var5 (prompt) = " + var5 + " ] ------ result = " +result); //Same sh** different day...
result = var1&&var6;
alert("[Test var1&&var6 avec var1 = " + var1 + " et var6 = " + var6 + " ] ------ result = " +result);
result = var2&&var3;
alert("[Test var2&&var3 avec var2 = " + var2 + " et var3 = " + var3 + " ] ------ result = " +result);
result = var2&&var5;
alert("[Test var2&&var5 avec var2 = " + var2 + " et var5 (prompt) = " + var5 + " ] ------ result = " +result);
result = var2&&var6;
alert("[Test var2&&var6 avec var2 = " + var2 + " et var6 = " + var6 + " ] ------ result = " +result);