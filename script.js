// =========================
// script.js
// =========================

// Paste your OpenWeather API key here
const apiKey = "9baf1b131acd5052f84d2b27245c7fd6";

async function getWeather() {

  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("Please enter a city name");
    return;
  }

  const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(apiUrl);

    const data = await response.json();

    console.log(data);

    // Check if city exists
    if (data.cod !== 200) {
      alert("City not found");
      return;
    }

    document.getElementById("cityName").innerText =
      data.name;

    document.getElementById("temperature").innerText =
      `${Math.round(data.main.temp)}°C`;

    document.getElementById("description").innerText =
      data.weather[0].description;

    document.getElementById("humidity").innerText =
      `${data.main.humidity}%`;

    document.getElementById("wind").innerText =
      `${data.wind.speed} km/h`;

    // Weather icon
    const iconCode = data.weather[0].icon;

    const iconUrl =
      `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    document.getElementById("weatherIcon").src = iconUrl;

  } catch (error) {

    console.log(error);

    alert("Something went wrong");

  }
}
