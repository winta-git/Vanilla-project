function formatDate(timestamp) {
    let date = new Date(timestamp);
    let hours = date.getHours();
    if (hours < 10) {
        hours = '0${minutes}';
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = '0s{minutes}';
    }
}
let days = ["Sunday","Monday","Tuesday","wednesday","thursday","Friday","Saturday"]
let day = days[date.getday()];
return '${day} ${hours}:${minutes}';

function displayTemperature(response) {
    let temperatureElement = document.querySelector("⋕temperature");
    let cityElement = document.querySelector("⋕city");
    let descriptionElement = document.querySelector("⋕description");
    let humidityElement = document.querySelector("⋕himudity");
    let windElement = document.querySelector ("⋕wind");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement = response.data.name;
    descriptionElement.innerHTML= response.data.weather[0].description;
    himidityElement.innerHTML = response.data.main.himidity;
    windElement.innerHTML = Math.round(response.data.wind.speed);
    HTMLTableDataCellElement.innerHTML = formatDate(response.date.dt * 1000);
}

let apikey = "eac809de9b5da86f7dca73c1830c1d4c";
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=eac809de9b5da86f7dca73c1830c1d4c';

let h1 = document.querySelector("⋕city");

axios.get(apiurl).then(displayTemperature);