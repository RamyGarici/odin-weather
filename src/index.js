import { fetchWeather } from "./api/weather";
import { renderCurrentWeather } from "./components/currentWeather";
import "./styles.css";
import logoImg from "./assets/logo.png"
import searchIcon from "./assets/search.png"


const container = document.getElementById("weather-card");
document.getElementById("logo-img").src = logoImg;
document.querySelector(".search-btn img").src = searchIcon;


async function testWeather() {
  // tu choisis une ville pour tester
  const data = await fetchWeather("Paris");

  if (data) {
    container.innerHTML = renderCurrentWeather(data);
  } else {
    container.innerHTML = "<p style='color:red'>Erreur : impossible de récupérer la météo</p>";
  }
}

testWeather();
