'use strict';

/**** Challenge 8 ****/

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