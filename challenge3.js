'use strict';

/**** Challenge 3 ****/

const poidsMichel = prompt("poids de Michel en kilogramme");
const tailleMichel = prompt("taille de Michel en cm");
const poidsJacqui = prompt("poids de Jacqui en kilogramme");
const tailleJacqui = prompt("taille de Jacqui en cm");
console.log("Michel "+tailleMichel+" cm, "+poidsMichel+" Kg");
alert("Michel "+tailleMichel+" cm, "+poidsMichel+" Kg");
console.log("Jacqui "+tailleJacqui+" cm, "+poidsJacqui+" Kg");
alert("Jacqui "+tailleJacqui+" cm, "+poidsJacqui+" Kg");

const MichelIMC = (poidsMichel / (tailleMichel*tailleMichel))*10000;
const JacquiIMC = (poidsJacqui / (tailleJacqui*tailleJacqui))*10000;
console.log("IMC de michel "+MichelIMC+" / IMC de Jacqui "+JacquiIMC);

let bernardHigherIMC;
(MichelIMC > JacquiIMC) ?
bernardHigherIMC = true :
bernardHigherIMC = False;

console.log(bernardHigherIMC);
bernardHigherIMC ? alert("Michel est le plus gros: IMC à "+MichelIMC) : alert("Jacqui est le plus gros: IMC à "+JacquiIMC);