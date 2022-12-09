const api = {
  key: "71b6296e0b914fa988d51005778c2433",
  beseurl: "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener("keypress", setQuery);

function setQuery(e) {
  if (e.keyCode == 13) {
    getResults(searchBox.value);
    console.log(searchBox.value);
  }
}

function getResults(query) {
  fetch(`${api.beseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
      return weather.json();
    })
    .then(displayResults);
}
function displayResults(weather) {
  console.log(weather);

  let city = document.querySelector(".location .city");
  city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    // const header =document.querySelector(".header")
    // header.reset()


  let temp = document.querySelector(".temp");
  temp.innerHTML = `${Math.round(weather.main.temp)} <span>°C</span>`;

  let weatherEl = document.querySelector(".weather");
  weatherEl.innerHTML = weather.weather[0].main;

  let hilow = document.querySelector(".hi-low")
  hilow.innerHTML=`${ Math.round(weather.main.temp_min) }°C / ${ Math.round(weather.main.temp_max) }°C`


  let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerHTML.dateBuilder(now);
}

function dateBuilder(b) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octomber",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    " Wednesday",
    "Thursday",
    "Friday",
    " Saturday",
  ];

  let day = days[b.getDay()];
  let date = b.getDate();
  let month = months[b.getMonth()];
  let year = b.getFullYear();
  return `${day} ${date} ${month} ${year}`;
}
