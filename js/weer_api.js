"use strict"; //opting-out of "sloppy mode"
const debug = true; //debuggen
// bind HTML elements via DOM
let weerButton = document.getElementById('weatherButton'); // bind via DOM
let weerButton2 = document.getElementById('weatherButton2'); // bind via DOM
let weatherTickerTape = document.getElementById('weatherTickerTape'); // bind via DOM
let weatherHere = document.getElementById('weatherHere'); // bind via DOM
let completeWeatherHere = document.getElementById('completeWeatherHere'); // bind via DOM
// zelf maken Eventlisteren click, getWeather
weerButton2.addEventListener('click', getWeather2);
// zelf maken Eventlistener click getWeatherTicker
// overige variabelen
let apiAddress = "http://weerlive.nl/api/json-data-10min.php?key="; // address
let key = "demo";

let locatie = "&locatie=";
//let geoLocation = "52.391225,4.856799"; //longitude lattitude
let geoLocation = "Amsterdam"; // locatie als string
let url  = apiAddress + key + locatie + geoLocation;


function showWeather(weatherString){
    let weatherObject = JSON.parse(weatherString);// JSON string => Object
    // deze code moet jij zelf schrijven
    weatherHere.innerHTML = ditWeer;
  }
function showWeather2(weatherString){
    let weatherObject = JSON.parse(weatherString);// convert JSON string => Object
    let completeData = "";   
    for (const [key, value] of Object.entries(weatherObject.liveweer[0])) {
      console.log(`${key}: ${value}`); // debug naar console
      completeData += key + " : " + value +"<br>"; // maak string
      weatherHere.innerHTML = completeData; // string printen in browser
    }
  }
function showWeatherTicker(weatherString){
    let weatherObject = JSON.parse(weatherString);// JSON string => Object

    document.getElementById('item1').innerHTML = weatherObject.liveweer[0].plaats;
    document.getElementById('item2').innerHTML = "Temperatuur " +
          weatherObject.liveweer[0].temp + " &#176;C";
  // deze code moet jij zelf schrijven
  }
function getWeather(){
    weatherHere.innerHTML = "";
    makeAjaxCall(url, "GET"). then (showWeather, errorHandler);
  }
function getWeather2(){
    weatherHere.innerHTML = "";
    makeAjaxCall(url, "GET"). then (showWeather2, errorHandler);
  }
function getWeatherTicker(){
    makeAjaxCall(url, "GET"). then (showWeatherTicker, errorHandler);
}


let reclameArray = [
  'Amsterdam Tech Academy',
  '<img src="./img/ATA_logo.png" height="60px" >',
  'Challenge reclame in de ticker tape'
];
