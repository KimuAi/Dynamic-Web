
document.getElementById("haalTekstOp").addEventListener("click", haalTekstOp);

async function haalTekstOp() {
    const resultaatDiv = document.getElementById("resultaat");

    // Start
    resultaatDiv.innerHTML = "<p>Bezig met ophalen...</p>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        // Controleer of de respons succesvol is
        if (!response.ok) {
            throw new Error("Er is iets mis gegaan met het ophalen van de data.");
        }

        const data = await response.json();

        // Haal de titel en body uit de response
        const tekst = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        `;

        // Toon de tekst
        resultaatDiv.innerHTML = tekst;

    } catch (error) {
        resultaatDiv.innerHTML = `<p class="error">${error.message}</p>`;
    }
}
