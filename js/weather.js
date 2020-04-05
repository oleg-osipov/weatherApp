export default class Weather {
  constructor(city, country) {
    //Free OpenWeatherMap - API key
    this.key = '5e35bf644902befd30eb527677a3ac5b';
    this.country = country;
    this.city = city;
  }

  //Get Weather Data
  async getWeather() {
    //Forecast Weather
    //const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${this.city},${this.country}&APPID=${this.key}&&units=metric`);

    //Current Weather
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.key}&units=metric`
    );

    const responseData = await response.json();
    return responseData;
  }

  //Change Location
  changeLocation(new_city, new_country) {
    this.city = new_city;
    this.country = new_country;
  }
}
