'use strict';

/**** Challenge 4 ****/

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