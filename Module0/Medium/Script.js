'use strict';

const getal1Input = document.getElementById
const getal2Input = document.getElementById
const berekenKnop = document.getElementById
const resultaatVeld = document.getElementById

berekenKnop.addEventListener('click', () =>{
const nr1 = Number(getal1Input.value);
const nr2 = Number(getal2Input.value);
})

if (isNaN(nr1) || isNaN(nr2)){
    resultaatVeld.textcontent = "voer een getal";
    return;
}

const som = nr1 + nr2;
resultaatVeld.textcontent = "${som}";
