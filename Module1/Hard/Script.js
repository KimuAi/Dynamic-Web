'use strict';

const nav = document.getElementById('mainMenu');
const headings = {
    h1: document.getElementsByTagName('h1'),
    h2: document.getElementsByTagName('h2')
};

const ul = document.createElement('ul');
nav.appendChild(ul);

let currentH1Item;

document.querySelectorAll('h1, h2').forEach(heading => {
    if(heading.tagName === 'H1'){
        const li = document.createElement('li');
        const a = document.createElement('a');

        // Id instellen voor de heading, als deze nog niet bestaat
        if (!heading.id) {
            heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
        }

        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        li.appendChild(a);
        
        // Submenu container maken
        const subUL = document.createElement('ul');
        li.appendChild(subUL);

        ul.appendChild(li);
        currentH1Item = li;

    } else if (heading.tagName === 'H2' && currentH1Item) {
        // Subitem toevoegen aan het juiste submenu
        const subUL = currentH1Item.querySelector('ul');
        const li = document.createElement('li');
        const a = document.createElement('a');

        if (!heading.id) {
            heading.id = heading.textContent.toLowerCase().replace(/\s+/g, '-');
        }

        a.href = '#' + heading.id;
        a.textContent = heading.textContent;
        li.appendChild(a);
        subUL.appendChild(li);
    }
});

// Scroll event toevoegen om de actieve sectie te markeren
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('h1, h2');
    let currentSection = null;

    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= window.innerHeight / 2 && section.getBoundingClientRect().bottom >= 0) {
            currentSection = section;
        }
    });

    if (currentSection) {
        document.querySelectorAll('nav a').forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === currentSection.id) {
                a.classList.add('active');
            }
        });
    }
});
