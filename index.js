let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";

// get current day

let now = new Date();

let minutes = String(now.getMinutes()).padStart(2, "0"); // 0,1,2, 12
let hours = now.getHours(); //1, 2, 3, 4
let date = now.getDate(); //1, 2, 3, 4
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// get current time

function currentTime(time) {
  time.preventDefault();
  let day = days[now.getDay()]; // 0, 1, 2
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${day}, ${hours}:${minutes}`;
}
let day = days[now.getDay()]; // 0, 1, 2

// change h2 to current day & time

let h2 = document.querySelector("h2");
h2.innerHTML = `${day}, ${hours}:${minutes}`;

// change city after user input

function currentTime(time) {
  time.preventDefault();

  let day = days[now.getDay()]; // 0, 1, 2
  let h2 = document.querySelector("h2");
  h2.innerHTML = `${day}, ${hours}:${minutes}`;
}
let day = days[now.getDay()]; // 0, 1, 2

let h2 = document.querySelector("h2");
h2.innerHTML = `${day}, ${hours}:${minutes}`;

// change city after user input

function searchCity(event) {
  event.preventDefault();
  let apiKey = "f8e6a9e3d6fde87cb38868da460b1371";
  let searchInput = document.querySelector("#city-input");
  let city = searchInput.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", searchCity);

// show temperature of city / user input

let description = document.querySelector("#temperature-description");
let temperatureElement = document.querySelector("#local-temp");

console.log(description);
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let description = document.querySelector("#temperature-description");
  let temperatureElement = document.querySelector("#local-temp");
  temperatureElement.innerHTML = `${temperature}C`;
  description.innerHTML = response.data.weather[0].description;

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}
