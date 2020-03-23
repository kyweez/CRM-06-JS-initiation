//exemple de fonction
var nbr = parseInt(prompt("Rentrez un nombre"));
var nbr_power = parseInt(prompt("Rentrez la puissance de ce nombre"));
var result = 1;
function power(nb, pow){
    for (var index = 0; index < nbr_power; index++)
        result *= nbr;
    return result;
}
alert(nbr+ "^" + nbr_power + " = " + power(nbr,nbr_power));