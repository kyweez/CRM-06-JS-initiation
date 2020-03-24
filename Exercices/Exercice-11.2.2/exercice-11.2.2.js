//Creation de l'element de base
var new_div = document.createElement("div");
new_div.id = "divTP2";

//Creation du paragraphe
var new_paragraph = document.createElement("p");
var paragraph_text = document.createTextNode("Langages basés sur ECMAScript :")
new_paragraph.appendChild(paragraph_text);

//creation d'un tableau de langages
var lang_tab = [
    document.createTextNode("JavaScript"),
    document.createTextNode("JScript"),
    document.createTextNode("ActionScript"),
    document.createTextNode("EX4")
];

//creation de la liste avec la boucle for
var new_ul = document.createElement("ul");
var new_li;
for(var i = 0; i < lang_tab.length; i++){
    new_li = document.createElement("li");
    new_li.appendChild(lang_tab[i]);
    new_ul.appendChild(new_li);
}

//Finalisation de la div final
new_div.appendChild(new_paragraph);
new_div.appendChild(new_ul);

//Insertion du la div dans le body
document.body.appendChild(new_div);