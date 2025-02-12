'use strict';

let specialelements = document.querySelectorAll('.special');
specialelements.forEach(element => {
    element.style.color = 'red';
});


let secondP = document.querySelector('pinth-child(2)');
secondP.computedStyleMap.textDecoration = 'underline';

let output = document.getElementById('output');
output.textContent = `Aantal special elementen: ${specialelements.length}`;

let specialelementsAlt = document.getElementsByClassName(`special`);
console.log(`Gevonden met getElementsByClassName: ${specialelementsAlt.length}`);

