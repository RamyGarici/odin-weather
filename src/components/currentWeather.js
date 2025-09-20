import { formatDateTime } from "../utils/date.js";



export function renderCurrentWeather(data) {
  return `
    

    <div class="temp-detail"><h1>${formatDateTime(data.location.localtime)}</h1>
    <p id="current-temp">${data.current.temp_c}<sup class="c">°C</sup></p>
    <p id="feel-like">Feels ${data.current.feelslike_c}<sup class="c">°C</sup></p>
    </div>

    <div class="icon-text">
    <img class="weather-logo" src="${data.current.condition.icon}" width="120" height="120">
    <div class="wind-detail">
    <h1>${data.current.condition.text}</h1>
    <p>Wind:${data.current.wind_kph}km/h</p>
    <p>Humidity:${data.current.humidity}%</p>
    <p>Precipitation:${data.forecast.forecastday[0].day.daily_chance_of_rain}%</p>


    </div></div>
  
  `;
}