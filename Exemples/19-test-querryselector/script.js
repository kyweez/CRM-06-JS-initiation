var query = document.querySelector("#menu .item span");
var queryAll = document.querySelectorAll("#menu .item span");
alert(query.innerHTML); // Affiche : "Élément 1" (innerHTNL permet de recuperer le code HTML enfant d'un element)
alert(queryAll.length); // Affiche : "2" car c'est le nombre d'elements dans #menu .item span
alert(queryAll[0].innerHTML + " - " + queryAll[1].innerHTML); // Affiche Élément 1 - Élément 2 