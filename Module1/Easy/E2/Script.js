'use strict';

//selecteer het loadin message element
const loadingMessage = document.getElementById('loadingMessage')

 // Wacht tot de pagina volledig geladen is
 window.addEventListener('load', function() 
    { 
    // Verander de tekst naar "Welcome!"
    loadingMessage.textContent = "Welcome!";

    // Wacht 2 seconden voordat je de tekst verbergt
    setTimeout(function() {
        loadingMessage.style.display = "none";
    }, 2000);
});