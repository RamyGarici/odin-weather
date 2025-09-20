import { getBackgroundImage } from "./getBackgroundImage";

const bg = document.getElementById("background");

export function updateBackground(data) {
  const bgImg = getBackgroundImage(data.current.condition.code, data.current.is_day);
  bg.style.backgroundImage = `url(${bgImg})`;
}
