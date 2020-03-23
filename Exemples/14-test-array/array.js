
//declaration de l'array
var my_array = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphabet = "";

//parcours du tableau
function parcours(arr){
    var i = 0;
    while (i < arr.length)
        alphabet += my_array[i++];
    alert(alphabet);
}
function print_tab(){
    parcours(my_array);
    alphabet = "";    
}
print_tab();

//test push
my_array.push(" [TEST DE PUSH] ");
print_tab();

//test de unshift
my_array.unshift(" [TEST DE UNSHIFT] ")
print_tab();

//test de changement de valeur
my_array[0] = "[Je vais supprimer cet element du tableau] "
print_tab();
my_array[my_array.length - 1] = " [Celui la aussi va partir]"
print_tab();

//test de suppression avec shift et pop
my_array.pop();
print_tab();
my_array.shift();
print_tab();

//test de la fonction split
var string = "abcdef";
var my_array2 = string.split("");
alert(my_array2[2]);
alert("la taille du tableau my_array2 est de " + my_array2.length);

//test de join
var string_test = my_array.join(" / ");
alert(string_test);