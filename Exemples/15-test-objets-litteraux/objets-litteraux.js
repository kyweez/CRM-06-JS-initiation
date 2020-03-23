//test sur les objets litteraux
var family = {
    self: "Rafael",
    sister: "Mathilde",
    brother: "Ahmed",
    cousin_1: "Jérôme",
    cousin_2: "Guillaume"
};

var id = "sister";

alert(family[id]); // Affiche : « Mathilde »
alert(family.brother); // Affiche : « Ahmed »
alert(family["self"]); // Affiche : « Rafael »
family["uncle"] = "Pauline"; // On ajoute une donnée, avec un identifiant.
family.aunt = "Karim"; // On peut ajouter aussi de cette manière.
alert(family.uncle);