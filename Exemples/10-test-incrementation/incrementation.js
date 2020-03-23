//test incrementation 
var nbr1 = 0;
alert("nbr1 = " + nbr1);
nbr1++;
alert("nbr1++ = " + nbr1);

//test increntation dans la fonction alert
var nbr2 = 0;
alert("nbr2 = " + nbr2++); //fonctionne de maniere normale
alert("nbr2 apres la precedente fonction = " + nbr2); //NB : J'avais oublie le point-virgule, ca fonctionne quand meme... Ce langage me degoute.

//test pre-incrementation
var nbr3 = 0;
alert("++nbr3 = " + ++nbr3); //La pre-incrementation fonctionne aussi