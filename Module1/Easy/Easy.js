'use strict';

let score = 0

// Voorbeeld start-code
let naam = prompt("Wat is je naam?");

alert(`Welkom bij de quiz, ${naam}!`);

// Stel hier je vragen...
let vraag1 = prompt("Wat betekend p");
if(vraag1.toLocaleLowerCase().includes("phrase")){
    alert("Goed gedaan");
    score++;
}else { 
    alert("Dit is fout, het juiste antwoord is phrase");
}

let vraag2 = prompt("Kan je max tot h6 of h7?");
if(vraag2.includes("h6")){
    alert("Goed gedaan");
    score++;
}else { 
    alert("Dit is fout, het juist antwoord is h6");
}

let vraag3 = prompt("Welke module is dit?");
if(vraag3.includes("1")){
    alert("Goed gedaan");
    score++;
}else { 
    alert("Dit is fout, het juiste antwoord is 1");
}

// Toon de resultaat
alert("je hebt " + score + " van de 3 juist!");


