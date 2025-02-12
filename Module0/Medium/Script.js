'use strict';

const getal1Input = document.getElementById('getal1');
const getal2Input = document.getElementById('getal2');
const berekenKnop = document.getElementById('berekenen');
const resultaatVeld = document.getElementById('resultaat');

berekenKnop.addEventListener('click', () => {
    const nr1 = Number(getal1Input.value);
    const nr2 = Number(getal2Input.value);

    if (isNaN(nr1) || isNaN(nr2)) {
        resultaatVeld.textContent = "Voer een getal in";
        return;
    }

    const som = nr1 + nr2;
    resultaatVeld.textContent = `${som}`;
});