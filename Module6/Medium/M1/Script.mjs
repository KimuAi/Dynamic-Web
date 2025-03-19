// Wacht totdat pagina geladen is
document.addEventListener('DOMContentLoaded', () => {
    // Haal alle knoppen op
    const buttons = document.querySelectorAll('.endpoint-knop');

    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            // Haal de HTTP statuscode op uit de datacode attribuut van de knop
            const statusCode = button.getAttribute('data-code');
            
            // Verzend een fetch verzoek naar de URL met de statuscode
            try {
                const response = await fetch(`https://httpstat.us/${statusCode}`);

                // Haal de statuscode en tekst van de response
                const statusText = `${response.status} ${response.statusText}`;

                // Bepaal de categoriegroep op basis van de statuscode
                let statusCategory = '';
                if (response.status >= 200 && response.status < 300) {
                    statusCategory = 'status-success';
                } else if (response.status >= 300 && response.status < 400) {
                    statusCategory = 'status-redirect';
                } else if (response.status >= 400 && response.status < 500) {
                    statusCategory = 'status-client-error';
                } else if (response.status >= 500) {
                    statusCategory = 'status-server-error';
                }

                // Update de status-info met de tekst en de categorie
                const statusInfo = document.getElementById('status-info');
                statusInfo.textContent = statusText;
                statusInfo.className = statusCategory; // Voeg de juiste CSS-klasse toe

                // Toon de details van de response headers
                const responseDetails = document.getElementById('response-details');
                let headersText = 'Response Headers:\n';
                response.headers.forEach((value, key) => {
                    headersText += `${key}: ${value}\n`;
                });

                // Toon het response type
                const responseType = response.headers.get('Content-Type') || 'Unknown';
                responseDetails.textContent = `${headersText}\nResponse Type: ${responseType}`;

            } catch (error) {
                // Fout in geval van een netwerkfout
                const statusInfo = document.getElementById('status-info');
                statusInfo.textContent = 'Er is een fout opgetreden bij het ophalen van de gegevens. Probeer het later opnieuw.';
                 // Foutkleur voor netwerkproblemen
                statusInfo.className = 'status-client-error';

                const responseDetails = document.getElementById('response-details');
                responseDetails.textContent = `Fout: ${error.message}`;
            }
        });
    });
});
