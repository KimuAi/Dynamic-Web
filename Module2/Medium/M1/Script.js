"use strict"; 

// Wacht tot de pagina helemaal geladen is
document.addEventListener("DOMContentLoaded", () => { 
    const winkelwagen = []; 

    const voegToeKnop = document.getElementById("addToCart");
    const sorteerOpPrijsKnop = document.getElementById("sortByPrice");

    // Als je op 'Voeg toe' klikt
    voegToeKnop.addEventListener("click", () => { 
        const productNaam = document.getElementById("productName").value.trim();
        const productPrijs = parseFloat(document.getElementById("productPrice").value);

        // Check of invoer geldig is
        if (productNaam && !isNaN(productPrijs) && productPrijs > 0) { 
            winkelwagen.push({ naam: productNaam, prijs: productPrijs }); // Product opslaan
            werkWinkelwagenBij(); // Update de lijst
        }
    });

    // Als je op 'Sorteer op prijs' klikt
    sorteerOpPrijsKnop.addEventListener("click", () => { 
        winkelwagen.sort((a, b) => a.prijs - b.prijs); // Sorteer de producten
        werkWinkelwagenBij(); // Update de lijst
    });

    // Bereken en update de winkelwagen
    function werkWinkelwagenBij() { 
        const winkelwagenItems = document.getElementById("cartItems"); // Zorg ervoor dat dit wordt gedefinieerd
        const totaalWeergave = document.getElementById("total"); // Zorg ervoor dat dit wordt gedefinieerd

        winkelwagenItems.innerHTML = ""; // Maak de lijst leeg
        let totaal = 0;

        winkelwagen.forEach((product, index) => {
            totaal += product.prijs; // Tel de prijzen op

            const li = document.createElement("li");
            li.textContent = `${product.naam} - €${product.prijs.toFixed(2)}`;

            // Knop om product te verwijderen
            const verwijderKnop = document.createElement("button"); 
            verwijderKnop.textContent = "Verwijder";
            verwijderKnop.addEventListener("click", () => {
                winkelwagen.splice(index, 1); // Verwijder het product
                werkWinkelwagenBij(); // Update de lijst
            });

            li.appendChild(verwijderKnop);
            winkelwagenItems.appendChild(li);
        });

        // Toon het totaalbedrag
        totaalWeergave.textContent = totaal.toFixed(2); 
    }
});
