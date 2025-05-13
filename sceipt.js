const API_KEY = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API Key

async function getWeather() {
  const city = document.getElementById('city-input').value;
  if (!city) {
    alert("Please enter a city name!");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found!");
      return;
    }

    // Update UI
    document.getElementById('city-name').textContent = data.name;
    document.getElementById('temperature').textContent = `${Math.round(data.main.temp)}°C`;
    document.getElementById('weather-description').textContent = data.weather[0].description;
    document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind-speed').textContent = `Wind: ${data.wind.speed} km/h`;
  } catch (error) {
    alert("Error fetching weather data!");
    console.error(error);
  }
}