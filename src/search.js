

export function initSearch(onSearch) {
  const form = document.getElementById("weather-form");
  const input = document.getElementById("city-input");



try{
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const city = input.value.trim();

    if (city) {
      input.value = ""; 
        onSearch(city);
    }
  });
}
catch(err){
    console.error(err);
}}
