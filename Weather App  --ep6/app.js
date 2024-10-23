const inputBox = document.querySelector(".input-box");
const serchBtn = document.getElementById("searchBtn");
const city_name = document.getElementById('city')
const weather_img = document.querySelector(".weather-img");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const humidity = document.getElementById("humidity");
const wind_speed = document.getElementById("wind-speed");
const location_not_found = document.querySelector('.location-not-found')
const weather_body = document.querySelector('.weather-body')

async function checkWeather(city) {
  const api_key = "27fbd3eea367816455b134381fbba68a";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

  const weather_data = await fetch(`${url}`).then((response) =>
    response.json()
  );

  if(weather_data.cod === '404'){
    location_not_found.style.display = 'flex' 
    weather_body.style.display = 'none'

  }

  console.log(weather_data);


city_name.innerHTML = `Location : ${weather_data.name}`
  temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
  description.innerHTML = `${weather_data.weather[0].description}`;
  humidity.innerHTML = `${weather_data.main.humidity}%`;
  wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

  switch (weather_data.weather[0].main) {
    case "Clouds":
      weather_img.src = "/assets/images/cloud.png";
      break;
    case "Clear":
      weather_img.src = "/assets/images/clear.png";
      break;
    case "Rain":
      weather_img.src = "/assets/images/rain.png";
      break;
    case "Mist":
      weather_img.src = "/assets/images/mist.png";
      break;
    case "Snow":
      weather_img.src = "/assets/images/snow.png";
      break;
  }
}

serchBtn.addEventListener("click", () => {
  checkWeather(inputBox.value);
});

// serchBtn.addEventListener('click', () =>{
//     alert('clicked')
// })
