var new_link = document.createElement("a"); //creer un element a
new_link.id = "lien-cree-en-js"; // ajouter l'attribut id a cet element
new_link.href = "https://www.youtube.com/watch?v=mMfxI3r_LyA"; // ajouter l'attribut href
new_link.target = "_blank";
document.getElementById("test-id").appendChild(new_link); //ajoute le lien a la fin du node #test-id
var new_link_text = document.createTextNode("Musique trop bien"); //creer un texte
new_link.appendChild(new_link_text); // attibut ce texte en "enfant" du  lien 
var br = document.createElement("br");
document.getElementsByTagName("div")[0].append(br);
var dup_node = document.getElementsByTagName("a")[0].cloneNode(true); // duplique le node cible avec tous ses attributs (true)
dup_node.id = "lien-clone-en-js"; // Changement de l'id pour ne pas avoir deux id du meme nom
document.getElementById("test-id").appendChild(dup_node); 
var br = document.createElement("br");
document.getElementsByTagName("div")[0].append(br);
var replace_link = document.getElementById("lien-clone-en-js"); //stock le node cible dans une variable
var new_label = document.createTextNode("Musique encore mieux");
replace_link.replaceChild(new_label, replace_link.firstChild); //remplace le texte du node
replace_link.href = "https://www.youtube.com/watch?v=rKOup6j8B34"; //remplace le lien du node par le biais de son attribut