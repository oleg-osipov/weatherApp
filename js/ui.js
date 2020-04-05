export class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.description = document.getElementById('w-description');
    this.string = document.getElementById('w-string');
    this.img = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.presure = document.getElementById('w-presure');
    this.sunrise = document.getElementById('w-sunrise');
    this.sunset = document.getElementById('w-sunset');
    this.feelsLike = document.getElementById('w-feels-like');
    this.temperature = document.getElementById('w-temperature');
    this.wind = document.getElementById('w-wind');
  }
  paint(weatherData) {
    //Location
    this.location.textContent = `${weatherData.name},${weatherData.sys.country}`;
    //Description
    this.description.textContent = weatherData.weather[0].description;
    //Temperature
    this.string.innerHTML = `${Math.round(
      weatherData.main.temp
    )} <span>&#176;</span>C`;
    //Img
    let iconurl = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    this.img.setAttribute('src', iconurl);
    //Humidity
    this.humidity.textContent = `Relative Humidity: ${weatherData.main.humidity}%`;
    //Presure
    this.presure.textContent = `Presure: ${weatherData.main.pressure} hpa`;
    //Feels Like
    this.temperature.innerHTML = `Temperature: ${Math.round(
      weatherData.main.temp
    )} <span>&#176;</span>C`;
    //Feels Like
    this.feelsLike.innerHTML = `Feels like: ${Math.round(
      weatherData.main.feels_like
    )} <span>&#176;</span>C`;
    //Wind
    this.wind.textContent = `Wind: ${weatherData.wind.speed}m/c`;
    //Sunrise
    const date_sunrise = new Date(weatherData.sys.sunrise * 1000);
    const sunrise_hours = date_sunrise.getHours();
    const sunrise_munuts = date_sunrise.getMinutes();
    this.sunrise.textContent = `Sunrise: ${sunrise_hours}h:${sunrise_munuts}min`;
    //Sunset
    const date_sunset = new Date(weatherData.sys.sunset * 1000);
    const sunset_hours = date_sunset.getHours();
    const sunset_minutes = date_sunset.getMinutes();
    this.sunset.textContent = `Sunset: ${sunset_hours}h:${sunset_minutes}min`;
  }
}
