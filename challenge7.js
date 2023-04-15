'use strict';

/**** Challenge 7 ****/

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