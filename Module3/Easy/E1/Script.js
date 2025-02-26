'use strict'

const telOp = (a, b) => a + b;

const isEvenGetal = getal => getal % 2 === 0;

const zegHallo = () => "Hallo!";


const output = document.getElementById('output');

output.innerHTML += `2 + 3 = ${telOp(2, 3)}<br>`;  // Verwacht "2 + 3 = 5"
output.innerHTML += `Is 4 even? ${isEvenGetal(4)}<br>`;  // Verwacht "Is 4 even? true"
output.innerHTML += zegHallo();  // Verwacht "Hallo!"
