/*
* Enlevé le symbole de commentaire sous un challenge
* pour qu'il fonctionne sans activé les autres
* désactivé le ensuite pour evité les conflits avec les noms de variables.
*/

'use strict';

/**** Challenge 10 ****/
/*
// Here are our Astro signs provided as a string.
const aries = `♈`,
  taurus = `♉`,
  gemini = `♊`,
  cancer = `♋`,
  leo = `♌`,
  virgo = `♍`,
  libra = `♎`,
  scorpio = `♏`,
  sagittarius = `♐`,
  capricorn = `♑`,
  aquarius = `♒`,
  pisces = `♓︎`;
// In Western Astrology there are 12 signs, organized by Earth Elements (Eart, Water, Air, Fire)  //
// You are going to manipulate the following arrays along with this challenge:  //
const fireSigns = [aries, leo];
const earthSigns = [taurus, virgo, capricorn, sagittarius];
const airSigns = [gemini, libra, aquarius];
const waterSigns = [cancer, scorpio, pisces];

//  🏁 Add one final element to an array //
//  Sagittarius is missing from fire signs please add it at the END of the array and verify the result.   
// ✒️ Write your code here
fireSigns.push(sagittarius);
console.log(fireSigns[fireSigns.length - 1] === "♐" ? "Good Answer ✅" : "Wrong Answer ❌" );

//  🏁 Remove the last element of an array //
//  Sagittarius should not be on earth Signs, please remove Sagittarius from the array, and verify the result.
// ✒️ Write your code here
earthSigns.pop(sagittarius);
console.log(earthSigns[earthSigns.length - 1] !== "♐" ? "Good Answer ✅" : "Wrong Answer ❌");

//  🏁  Initialize an empty array in javascript //
//  Please initialize an empty array and store it in a let variable called zodiacSigns
// ✒️ Write your code here
let zodiacSigns = [];

//  🏁 🏁 Merge Fire, Earth, Water, and Air arrays into zodiacSigns (in that order), using the concat methods
// ✒️ Write your code here
zodiacSigns = [...fireSigns, ...earthSigns, ...waterSigns, ...airSigns, ];
console.log((zodiacSigns !== null && zodiacSigns.toString() === "♈,♌,♐,♉,♍,♑,♋,♏,♓︎,♊,♎,♒") ? "Good Answer ✅" : "Wrong Answer ❌");

//  🏁 Please print dynamically in console how many elements you have now in the zodiacSigns array
console.log(`There is `+zodiacSigns.length+` signs in the zodiac`);


/**** Challenge 9 ****/
/**  9.1 **/
/*
const hiddenMessage = ["X", "X", "X", "X", "W", "X", "E",  "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "L", "X", "X", "X", "X", "X", "X", "X", "X", "X", " ","X", "X", "X", "X", "X", "X", "X", "X", "D", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "O", "X", "X", "X", "X", "X", "X", "N", "X", "X", "X", "X", "E", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", ",", "X", " ", "X"]
let revealedMessage = [];
for(let i = 0; i < hiddenMessage.length;i++){
    hiddenMessage[i] != "X" ? revealedMessage.push(hiddenMessage[i]) : "";
}
console.log (revealedMessage.join(""));

/** 9.2 **/
/*
const hiddenCode = "XXXXXXXXXXXXXXXXXXXXXXXXXXXCXXXXXXXOXXXXXDXXXXXXXXXXXXXXXEXXXX XXXXXXXXXXXXXXX:X0XXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX3XXXXXX2XXXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX6XXXXXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX7XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXXXXXXXXX8XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX8XXXXXXXXXXX4XXXXXXXXXXXX6XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXXXXXXXXXXXXXXXX9XXXX9XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX2XXX4XXXXXXXXXXX6XXXXXXXXX2XXXXXXXX3XXXXXXXX2XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX4XXXXX"
let hidden = hiddenCode.split('');
let phase1 = [];
let revealedCode = [];
for(let i = 0; i < hidden.length;i++){
    hidden[i] != "X" ? phase1.push(hidden[i]) : "";
}
for(let i = 0; i < phase1.length;i++){
    !Number.isInteger(phase1[i] / 2) || phase1[i] == 0 ? revealedCode.push(phase1[i]) : "";
}
console.log (revealedCode.join(""));

/* // Tentative echoué //
for(let i = 0; i < hidden.length;i++){
    hidden[i] != "X"// || hidden[i] == 0 || !Number.isInteger(hidden[i] / 2) ?  // Pourquoi ça ne marche pas ?
    revealedCode.push(hidden[i]) : "";
}
console.log (revealedCode.join(""));
*/

/**** Challenge 8 ****/
/*
const calcTip = (bills) =>{
    for(let i=0;bills.length>i ;i++){
        if((50 <= bills[i]) && (bills[i] <= 300)){
            tips[i] = bills[i]*0.15;
            total[i] = bills[i] + tips[i];
        }else{
            tips[i] = bills[i]*0.20;
            total[i] = bills[i] + tips[i];
        }
    }
}
const calcAverage = (tableau) => {
    if(tableau.length === 0){
      return 0;
    }
    const initialValue = 0;
    const sumWithInitialValue = tableau.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
    return sumWithInitialValue / tableau.length;
  };
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = []
calcTip(bills);
console.log("Notes : "+bills);
console.log("Pourboires : "+tips);
console.log("Factures : "+total);
console.log("Moyenne des factures : "+calcAverage(total));



/**** Challenge 7 ****/
/*

const calcTip = (bill) =>{
    if((50 <= bill) && (bill <= 300)){
        return (bill*0.15);
    }else{
        return (bill*0.20);
    }
}
const bills = [10, 100, 125, 555, 44];
let tips = [];
let total = []

for(let i=0;bills.length>i ;i++){
    tips[i] = calcTip(bills[i]);
    total[i] = bills[i] + tips[i];
}
console.log("Notes : "+bills);
console.log("Pourboires : "+tips);
console.log("Factures : "+total);


/**** Challenge 6 ****/
/*
const ekip1Name = "Dolphins Rogers";
const ekip2Name = "Koala Loumpour";
const ekip1Scores = [44, 23, 71 ];
const ekip2Scores = [65, 54, 49 ];

const calcAverage = (tableau) => {
  if(tableau.length === 0){
    return 0;
  }
  const initialValue = 0;
  const sumWithInitialValue = tableau.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue);
  return sumWithInitialValue / tableau.length;
};
const checkWiner = (num1,num2) => {
    if(num1 === num2){ // J'ai pas ignoré l'églité :-o
        return "Egalité "+num1+" à "+num2+".";
    }else if(num1 > num2){
        return "les "+ekip1Name+" remporte la victoire avec un score de "+num1+" à "+num2+".";
    }else{
        return "les "+ekip2Name+" remporte la victoire avec un score de "+num2+" à "+num1+".";
    }
}
let moyenneEkip1 = calcAverage(ekip1Scores);
let moyenneEkip2 = calcAverage(ekip2Scores);

let victory = checkWiner(moyenneEkip1,moyenneEkip2);
alert(victory);
console.log(victory);


/**** Challenge 5 ****/
/*
const bigTip = 1.20;
const lightTip = 1.15;
const note = parseInt(prompt("Valeur de la facture :"));
let facture = 0;

((50 <= note) && (note <= 300)) ? facture = (Math.round((note*lightTip)*100))/100 : facture = (Math.round((note*bigTip)*100))/100;
let tip = facture - note;
console.log(note);
alert("La note était de "+note+", le pourboire de "+tip+". La facture s'élève à "+facture+".");


/**** Challenge 4 ****/
/*
const equipe1 = prompt("Nom de l'équipe 1");
const equipe2 = prompt("Nom de l'équipe 2");
let matches = parseInt(prompt("Combien de matches"))+1;
let scores1 = [];
let scores2 = [];

for(let tours = 1;matches > tours;tours++){
    console.log(matches)
    scores1.push(parseInt(prompt("score de l'équipe "+equipe1+" a cette manche "+tours)));
    scores2.push(parseInt(prompt("score de l'équipe "+equipe2+" a cette manche "+tours)));
}
matches--;

console.log(matches);
console.log(scores1);
console.log(scores2);

let somme1 = 0;
let somme2 = 0;
let moyenne1 = 0;
let moyenne2 = 0;

for(let tours = 0;matches > tours;tours++){
    somme1 += scores1[tours];
    somme2 += scores2[tours];
}
console.log("somme1 "+somme1);
console.log("somme2 "+somme2);
moyenne1 = somme1/matches;
moyenne2 = somme2/matches;
const limit = matches*100;

console.log("les "+equipe1+" ont une moyenne de "+moyenne1);
console.log("les "+equipe2+" ont une moyenne de "+moyenne2);

if((somme1 < limit) && (somme2 < limit)){
    alert("Aucun vainqueur !!")
}else if(somme1 == somme2){
    alert("Egalité !")
}else{
    if(somme1 > somme2){
        alert("Victoire de l'équipe "+equipe1+" avec un score moyen de "+moyenne1+" contre "+moyenne2+" pour l'équipe "+equipe2);
    }else{
        alert("Victoire de l'équipe "+equipe2+" avec un score moyen de "+moyenne2+" contre "+moyenne1+" pour l'équipe "+equipe1);
    }
}


/**** Challenge 3 ****/
/*
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
*/