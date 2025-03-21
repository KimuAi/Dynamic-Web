// Producten in de winkelwagen
const products = [
    { id: 1, name: "T-shirt", price: 15, quantity: 2 },
    { id: 2, name: "Jeans", price: 45, quantity: 1 },
    { id: 3, name: "Sokken", price: 5, quantity: 3 }
];

// Functie om de totaalprijs te berekenen
const calculateTotal = (items) => {
    let total = 0;
    
    for (const item of items) {
        // Correcte berekening: prijs * hoeveelheid
        total += item.price * item.quantity;
    }
    
    return total;
};

// Event listener voor de "Bereken totaal" knop
document.getElementById("calculateButton").addEventListener("click", () => {
    const total = calculateTotal(products); // Bereken de totaalprijs
    document.getElementById("total").textContent = total; // Werk de totaalprijs bij in de HTML
});