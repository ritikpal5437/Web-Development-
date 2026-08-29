const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherBox = document.getElementById("weatherBox");

async function checkWeather(city) {
    if (!city) return;
try {
        const geoUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
        const geoResponse = await fetch(geoUrl);
        const geoData = await geoResponse.json();

        if (!geoData.results || geoData.results.length === 0) {
            alert("City not found!");
            return;
        }

        const { latitude, longitude, name, country } = geoData.results[0];
        const weatherUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&relative_humidity_2m=true`;
        const weatherResponse = await fetch(weatherUrl);
        const weatherData = await weatherResponse.json();

        
        document.getElementById("city").innerText = `${name}, ${country}`;
        document.getElementById("temp").innerText = Math.round(weatherData.current_weather.temperature) + "°C";
        document.getElementById("wind").innerText = weatherData.current_weather.windspeed + " km/h";
        
        if (weatherData.hourly && weatherData.hourly.relative_humidity_2m) {
            document.getElementById("humidity").innerText = weatherData.hourly.relative_humidity_2m[0] + "%";
        } else {
            document.getElementById("humidity").innerText = "N/A";
        }

        weatherBox.style.display = "block";

    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert("Something went wrong. Try again!");
    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(cityInput.value);
});

cityInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        checkWeather(cityInput.value);
    }
});