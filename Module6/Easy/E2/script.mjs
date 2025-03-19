// Functie om gebruikers op te halen van de API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error("Fout bij het ophalen van gegevens");
        }
        return response.json();
    })
    .then(data => {
        // Verwijder de laat indicator
        const container = document.getElementById("gebruikers-container");
        container.innerHTML = '';

        //Loopt door gebruikersgegevens & maak een kaart voor elke gebruiker aan
        data.forEach(user => {
            const userCard = document.createElement("div");
            userCard.classList.add("gebruiker-kaart");

            const userName = document.createElement("div");
            userName.classList.add("gebruiker-naam");
            userName.textContent = user.name;

            const userEmail = document.createElement("div");
            userEmail.classList.add("gebruiker-email");
            userEmail.textContent = `E-mail: ${user.email}`;

            const userPhone = document.createElement("div");
            userPhone.textContent = `Telefoon: ${user.phone}`;

            // Voeg de naam, email en telefoon toe aan de userCard
            userCard.appendChild(userName);
            userCard.appendChild(userEmail);
            userCard.appendChild(userPhone);

            // Voeg de userCard toe aan de container
            container.appendChild(userCard);
        });
    })
    .catch(error => {
        // Toon foutmelding als het ophalen mislukt
        const container = document.getElementById("gebruikers-container");
        container.innerHTML = `<div class="error-melding">Er is een fout opgetreden: ${error.message}</div>`;
    });
