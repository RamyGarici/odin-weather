import clearDay from "../assets/backgrounds/clear-day.webp";
import clearNight from "../assets/backgrounds/clear-night.webp";
import partlyCloudDay from "../assets/backgrounds/partly-cloudy-day.webp";
import partlyCloudNight from "../assets/backgrounds/partly-cloudy-night.webp";
import partlyCloudAfternoon from "../assets/backgrounds/partly-cloudy-day-afternoon.webp";
import cloudy from "../assets/backgrounds/cloudy.webp";
import fog from "../assets/backgrounds/fog.webp";
import wind from "../assets/backgrounds/wind.webp";
import snow from "../assets/backgrounds/snow.webp";
import snowShowersDay from "../assets/backgrounds/snow-showers-day.webp";
import snowShowersNight from "../assets/backgrounds/snow-showers-night.webp";
import rain from "../assets/backgrounds/rain.webp";
import rainShowersDay from "../assets/backgrounds/rain-showers-day.webp";
import rainShowersNight from "../assets/backgrounds/rain-showers-night.webp";
import thunderRain from "../assets/backgrounds/thunder-rain.webp";

export function getBackgroundImage(conditionCode, isDay) {
  const day = isDay === 1;

  switch (conditionCode) {
    case 1000: // Clear
      return day ? clearDay : clearNight;

    case 1003: // Partly Cloudy
      return day ? partlyCloudDay : partlyCloudNight;

    case 1006: // Cloudy
    case 1009: // Overcast
      return cloudy;

    case 1030: // Mist
    case 1135: // Fog
    case 1147: // Freezing fog
      return fog;

    case 1063: // Patchy rain nearby
    case 1150: case 1153: case 1180: case 1183: case 1186: case 1189:
    case 1192: case 1195: case 1240: case 1243: case 1246:
      return day ? rainShowersDay : rainShowersNight;

    case 1198: case 1201: case 1273: case 1276: // Heavy/Thunder rain
      return thunderRain;

    case 1066: case 1069: case 1072: case 1114: case 1117:
    case 1210: case 1213: case 1216: case 1219: case 1222: case 1225:
      return snow;

    case 1255: case 1258: case 1261: case 1264: case 1279: case 1282:
      return day ? snowShowersDay : snowShowersNight;

    case 1087: // Thunder
      return thunderRain;

    default:
      return day ? clearDay : clearNight;
  }
}
