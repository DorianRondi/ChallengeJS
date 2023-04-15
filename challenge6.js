'use strict';

/**** Challenge 6 ****/

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