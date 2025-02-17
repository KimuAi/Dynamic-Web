'use strict';

const nav = document.getElementById('mainMenu');
const headings = {
    h1: document.getElementsByTagName('h1'),
    h2: document.getElementsByTagName('h2')
};

const ul = document.createElement('ul');
navigator.appendChild(ul);

let currentH1Item;

document.querySelectorAll('h1, h2').forEach(heading => {
    if( heading.tagName === 'H1'){
        const li = document.createElement('li');
        const a = document.createElement('a');

        if (heading.id){
            heading.id = heading.textContent.toLocaleLowerCase().replace(/\s+g, '-');
        }

        a.href = '#' + heading.id
        a.textContent = heading.textContent;
        li.appendChild(a);
    }
})