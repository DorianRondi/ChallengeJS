'use strict';

/**** Challenge 5 ****/

const bigTip = 1.20;
const lightTip = 1.15;
const note = parseInt(prompt("Valeur de la facture :"));
let facture = 0;

((50 <= note) && (note <= 300)) ? facture = (Math.round((note*lightTip)*100))/100 : facture = (Math.round((note*bigTip)*100))/100;
let tip = facture - note;
console.log(note);
alert("La note était de "+note+", le pourboire de "+tip+". La facture s'élève à "+facture+".");