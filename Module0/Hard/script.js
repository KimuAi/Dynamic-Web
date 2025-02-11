'use strict';

const themaKnop = document.getElementById('themaKnop');
const body = document.body;

themaKnop.addEventListener('click', () => {
    const isDonker = body.style.backgroundColor === 'black';
});

//wissel kleuren
body.style.backgroundColor === isDonker ? 'white' : 'black';
body.style.color = isDonker ? 'blue' : 'lightblue';

//verander link kleur
const links = document.getElementsByTagName('a');
for(let link of links){
    link.style.color = isDonker ? 'blue' : 'lightblue';
};

//update knop text
themaKnop.textContent = isDonker ? 'Donker thema' : 'licht thema';
