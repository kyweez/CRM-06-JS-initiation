//Creation des elements
var new_div = document.createElement("div"), //Creation de la div
    new_strong_1 = document.createElement("strong"), //Creation du premier strong
    new_strong_2 = document.createElement("strong"), //Creation du deuxieme strong
    new_link_1 = document.createElement("a"), //Creation du premier lien
    new_link_2 = document.createElement("a"); //Creation du deuxieme lien

//Creation du texte des elements inline
var new_strong_text_1 = document.createTextNode("World Wide Web Consortium"),
    new_strong_text_2 = document.createTextNode("W3C"),
    new_link_text_1 = document.createTextNode("organisme de standardisation"),
    new_link_text_2 = document.createTextNode("World Wide Web");

//Creation du texte du contenu
var text_1 = document.createTextNode("Le"),
    text_2 = document.createTextNode(", abrégé par le sigle "),
    text_3 = document.createTextNode(", est un "),
    text_4 = document.createTextNode(" à but non-lucratif chargé de promouvoir la compatibilité des technologies du ");

//Ajout d'attributs
new_div.id = "divTP1";
new_link_1.href = "https://fr.wikipedia.org/wiki/Organisme_de_normalisation";
new_link_2.href = "http://fr.wikipedia.org/wiki/World_Wide_Web";
new_link_1.title = "Organisme de normalisation";
new_link_2.title = "World Wide Web";

//Ajout du texte dans les balises inlince
new_strong_1.appendChild(new_strong_text_1);
new_strong_2.appendChild(new_strong_text_2);
new_link_1.appendChild(new_link_text_1);
new_link_2.appendChild(new_link_text_2);

//Ajout de la div dans le DOM
document.body.appendChild(new_div);

//Ajout du contenu dans la div
new_div.appendChild(text_1);
new_div.appendChild(new_strong_1);
new_div.appendChild(text_2);
new_div.appendChild(new_strong_2);
new_div.appendChild(text_3);
new_div.appendChild(new_link_1);
new_div.appendChild(text_4);
new_div.appendChild(new_link_2);