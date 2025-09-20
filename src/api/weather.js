
const API_KEY = process.env.API_KEY;


export async function fetchWeather(city) {
    const url=`https://api.weatherapi.com/v1//forecast.json?key=${API_KEY}&q=${city}&days=7`;
    try{
      const response= await fetch(url);
      if(!response.ok){throw new Error("City Not Found!");}
      return await response.json();
    
    }
    catch(err){
        console.error(err);
        return;

    }
    
}