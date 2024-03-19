function displayTemperature(response) {
  let cityElement = document.querySelector("#current-city");

  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  console.log(searchInput.value);

  let city = searchInput.value;

  let apiKey = "4ef338f5233o76808cfdt1cea07bcce0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayTemperature);
}

function currentTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let formattedDate = days[day];
  return `${formattedDate} ${hours}:${minutes},`;
}

let searchButton = document.querySelector("#search-form");
searchButton.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();
currentDateElement.innerHTML = currentTime(currentDate);
