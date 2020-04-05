'use strict';
import { default as Codes } from './countries_code.js';
import { UI } from './ui.js';
import Weather from './weather.js';

let weather = new Weather('Stockholm', 'SE');
const ui = new UI();

//Display weather data event
document.addEventListener('DOMContentLoaded', showWeather);

//Clear inputs event

//Change location event
document.getElementById('w-changeButton').addEventListener('click', (e) => {
  let newCity = document.getElementById('city').value;
  let newCountry = document.getElementById('country').value;

  //Get country's alpha2code
  const contryAlphaTwoCode = Codes.find((contry) => {
    return contry.name === newCountry;
  });

  //change location
  weather.changeLocation(newCity, contryAlphaTwoCode.alpha2code);

  //get updated data
  weather.getWeather();

  //update weather data on the page
  showWeather();

  //close form
  $('#locationModal').modal('hide');
});

function showCountryName() {}

function showWeather() {
  weather
    .getWeather()
    .then((result) => {
      ui.paint(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
