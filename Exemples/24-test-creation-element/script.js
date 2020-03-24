var new_link = document.createElement("a"); //creer un element a
new_link.id = "lien-cree-en-js"; // ajouter l'attribut id a cet element
new_link.href = "https://www.youtube.com/watch?v=mMfxI3r_LyA"; // ajouter l'attribut href
new_link.title = "Musique de fou";
new_link.target = "_blank";
//alert(document.getElementById("test-id"))
document.getElementById("test-id").appendChild(new_link);

var new_link_text = document.createTextNode("Musique trop bien");
new_link.appendChild(new_link_text);