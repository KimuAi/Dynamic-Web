class Product {
    constructor(naam, prijs, voorraad) {
        this.naam = naam;
        this._prijs = prijs;
        this._voorraad = voorraad;
    }

    // Setter voor prijs (waarbij de prijs niet onder 0 kan komen)
    set prijs(value) {
        if (value < 0) {
            console.log("Prijs kan niet onder 0 komen.");
        } else {
            this._prijs = value;
        }
    }

    // Setter voor voorraad (waarbij de voorraad niet onder 0 kan komen)
    set voorraad(value) {
        if (value < 0) {
            console.log("Voorraad kan niet onder 0 komen.");
        } else {
            this._voorraad = value;
        }
    }

    // Getter voor verkoopprijs (prijs inclusief 21% BTW)
    get verkoopprijs() {
        return this._prijs * 1.21;
    }

    // Getter voor beschikbaarheid (true als voorraad > 0)
    get beschikbaar() {
        return this._voorraad > 0;
    }

    // Weergave van productinformatie
    displayProduct() {
        return `
            <p><strong>Naam:</strong> ${this.naam}</p>
            <p><strong>Prijs:</strong> €${this._prijs}</p>
            <p><strong>Verkoopprijs (incl. BTW):</strong> €${this.verkoopprijs.toFixed(2)}</p>
            <p><strong>Beschikbaarheid:</strong> ${this.beschikbaar ? "Beschikbaar" : "Niet beschikbaar"}</p>
            <hr>
        `;
    }
}

// Maak drie verschillende producten
const product1 = new Product('Laptop', 1000, 5);
const product2 = new Product('Smartphone', 500, 0);
const product3 = new Product('Headphones', 150, 10);

// Voeg producten toe aan =output div
const outputDiv = document.getElementById('output');
outputDiv.innerHTML = product1.displayProduct() + product2.displayProduct() + product3.displayProduct();