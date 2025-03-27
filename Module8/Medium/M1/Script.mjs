 // mijn API sleutel
const apiKey = "564671a5a4cb11ba7597f32ddbde5f3b"; 

const weatherDataDiv = document.getElementById("weather-data");
const loader = document.getElementById("loader");
const cachedNotice = document.getElementById("cached-notice");

// Functie om weer via OpenWeatherMap te openen
function fetchWeather(lat, lon) {
    loader.style.display = 'block';
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=nl`)
        .then(response => response.json())
        .then(data => {
            loader.style.display = 'none';
            const temperature = data.main.temp;
            const city = data.name;
            const weatherDescription = data.weather[0].description;
            
            // Bewaar de data in localStorage
            const weatherInfo = {
                city: city,
                temperature: temperature,
                description: weatherDescription
            };
            localStorage.setItem('weatherData', JSON.stringify(weatherInfo));
            
            weatherDataDiv.innerHTML = `
                <h2>${city}</h2>
                <p>${temperature}°C</p>
                <p>${weatherDescription}</p>
            `;
            cachedNotice.innerHTML = '';  // Verwijder de melding voor cached data
        })
        .catch(error => {
            loader.style.display = 'none';
            weatherDataDiv.innerHTML = `<p>Er is een fout opgetreden bij het ophalen van de weersgegevens.</p>`;
        });
}

// Functie om locatie op te halen
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeather(lat, lon);
        }, () => {
            weatherDataDiv.innerHTML = `<p>Kan je locatie niet ophalen.</p>`;
        });
    } else {
        weatherDataDiv.innerHTML = `<p>Geolocatie wordt niet ondersteund door deze browser.</p>`;
    }
}

// Als er cacheddata is, toont het direct
if (localStorage.getItem('weatherData')) {
    const cachedWeather = JSON.parse(localStorage.getItem('weatherData'));
    weatherDataDiv.innerHTML = `
        <h2>${cachedWeather.city}</h2>
        <p>${cachedWeather.temperature}°C</p>
        <p>${cachedWeather.description}</p>
    `;
    cachedNotice.innerHTML = 'Deze gegevens zijn afkomstig uit de cache.';
}

// Event listener voor de knop
document.getElementById('getWeather').addEventListener('click', getLocation);