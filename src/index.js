import { fetchWeather } from "./api/weather";
import { renderCurrentWeather } from "./components/currentWeather";
import "./styles.css";
import logoImg from "./assets/logo.png"
import searchIcon from "./assets/search.png"
import { updateBackground } from "./utils/updateBackground";
import{initSearch} from "./search";


const container = document.getElementById("weather-card");
document.getElementById("logo-img").src = logoImg;
document.querySelector(".search-btn img").src = searchIcon;


async function handleSearch(city) {
  // tu choisis une ville pour tester
  try{
  const data = await fetchWeather(city);
  updateBackground(data);

  if (data) {
    container.innerHTML = renderCurrentWeather(data);
  } else {
    container.innerHTML = "<p style='color:red'>Erreur : impossible de récupérer la météo</p>";
  }
}catch{alert("An error occurred while fetching the data")}}

initSearch(handleSearch);
handleSearch("Paris");
