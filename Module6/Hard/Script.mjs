//declareer de variabelen van html
const apiKey = "564671a5a4cb11ba7597f32ddbde5f3b"; // Jouw API sleutel
const weatherDisplay = document.getElementById('weather-display');
const favoritesList = document.getElementById('favorites-list');
const cityInput = document.getElementById('city-input');
const searchButton = document.getElementById('search-button');

// Functie om weergegevens te tonen
function displayWeather(data, unit = 'metric') {
    const temperature = unit === 'metric' ? data.main.temp : (data.main.temp * 9/5) + 32;
    const unitSymbol = unit === 'metric' ? '°C' : '°F';
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();

    //de teskt die je ziet op de pagina
    const weatherCard = `
        <div class="weather-card">
            <h2>${data.name}</h2>
            <p>Temperatuur: ${temperature.toFixed(1)} ${unitSymbol}</p>
            <p>Weer: ${data.weather[0].description}</p>
            <p>Luchtvochtigheid: ${data.main.humidity}%</p>
            <p>Windsnelheid: ${data.wind.speed} m/s</p>
            <p>Zonsopgang: ${sunriseTime}</p>
            <p>Zonsondergang: ${sunsetTime}</p>
            <button id="toggle-unit-button">Schakel naar ${unit === 'metric' ? 'Fahrenheit' : 'Celsius'}</button>
        </div>
    `;

    weatherDisplay.innerHTML = weatherCard;

    // Wijzig de eenheid bij klikken
    const toggleUnitButton = document.getElementById('toggle-unit-button');
    toggleUnitButton.addEventListener('click', () => {
        const newUnit = unit === 'metric' ? 'imperial' : 'metric';
        fetchWeather(data.name, newUnit);
    });
}

// Functie om weergegevens op te halen van de API
function fetchWeather(city, unit = 'metric') {
    weatherDisplay.innerHTML = '<div class="loading">Bezig met laden...</div>';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}&lang=nl`)
        .then(response => response.json())
        .then(data => {
            if (data.cod === '404') {
                throw new Error('Stad niet gevonden');
            }
            displayWeather(data, unit);
        })
        .catch(error => {
            weatherDisplay.innerHTML = `<div class="error">${error.message}</div>`;
        });
}

// Functie voor het opslaan van favorieten
function saveFavorite(city) {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (!favorites.includes(city)) {
        favorites.push(city);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        displayFavorites();
    }
}

// Functie voor het weergeven van favorieten
function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favoritesList.innerHTML = '';
    favorites.forEach(city => {
        const favoriteItem = document.createElement('div');
        favoriteItem.className = 'favorite-item';
        favoriteItem.textContent = city;
        favoriteItem.addEventListener('click', () => fetchWeather(city));
        favoritesList.appendChild(favoriteItem);
    });
}

// Zoekfunctie
searchButton.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
        saveFavorite(city);
    }
});

// Laad favorieten bij het opstarten
displayFavorites();
