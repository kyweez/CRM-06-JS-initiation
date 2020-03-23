var family = {
    self: "Rafael",
    sister: "Mathilde",
    brother: "Ahmed",
    cousin_1: "Jérôme",
    cousin_2: "Guillaume"
};

for (var id in family) { // On stocke l'identifiant dans « id » pour parcourir l'objet « family »
    alert(family[id]);
}

//test ajout
family.aunt = "Chantal";

//test modification
family["self"] = "Aurel";

for (var id in family) {
    alert(family[id]);
}