function formatDate(timestamp) {
  
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = '0s{minutes}';
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0s{minutes}';
    }

let days = ["Sunday","Monday","Tuesday","wednesday","thursday","Friday","Saturday"]
let day = days[date.getday(0)];
return `${day} ${hours}:${minutes}`;


}
function displayTemperature(response) {
    let temperatureElement = document.querySelector("⋕temperature");
    let cityElement = document.querySelector("⋕city");
    let descriptionElement = document.querySelector("⋕description");
    let humidityElement = document.querySelector("⋕himudity");
    let windElement = document.querySelector("⋕wind");
    let iconElement = document.querySelector("⋕icon");

    celsiusTemperature = response.data.main.temp;

    temperatureElement.innerHTML = Math.round(celsiusTemperature);
    cityElement = response.data.name;
    descriptionElement.innerHTML= response.data.weather[0].description;
    himidityElement.innerHTML = response.data.main.himidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    dataElement.innerHTML = formatDate(response.date.dt * 1000);
    iconElement.setAttribute("src", '');
    iconElement.setAttribute("alt", response.data.weather[0].description);
}
function search(city) {
let apikey = "eac809de9b5da86f7dca73c1830c1d4c";
    let apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=eac809de9b5da86f7dca73c1830c1d4c&units=metric';
    axios.get(apiUrl).then(displayTemperature);

}
function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.queryselector("⋕city-input");
    search(cityInputElement.value);
    console.log(cityInputElement.value);
}
function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let fahrenheitTemperature = (celsiusTemperatur * 9) / 5 + 32;
    alert("Link clicked");
    let temperatureElement = document.querySelector("⋕temperature");
    temperatureElement.innerHTML = Math.round (fahrenheitTemperature);


}
function displayFahrenheitTemperature(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("⋕temperature");
    temperatureElement.innerHTML = celsiusTemperature;
}
let celsiusTemperature = null;


let form = document.querySelector("search-form");
form.addEventListener("submit", handleSubmit);


let fahrenheitlink = document.querySelector("⋕fehrenheit-link")
fahrenheitlink.addEventListener("click", displayFahrenheitTemperature);

let celsiuslink = document.querySelector("⋕celsius-link")
celsiuslink.addEventListener("click", displayCelsiusTemperature);