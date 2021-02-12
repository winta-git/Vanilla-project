function displayTemperature(response) {
    let temperatureElement = document.querySelector("⋕temperature");
    let cityElement = document.querySelector("⋕city");
    let descriptionElement = document.querySelector("⋕description");
    let humidityElement = document.querySelector("⋕himudity");
    let windElement = document.querySelector("⋕wind");
    temperatureElement.InnerHTML = math.round(response.data.main.temp);
    cityElement = response.data.name;
    descriptionElement.InnerHTML = response.data.weather[0].description;
    himidityElement.InnerHTML = response.data.main.himidity;
    windElement.InnerHTML = math.round(respond.data.wind.speed);
}
let apikey = "db19e864f86e1792fa09a7dafc23c7cf";
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=db19e864f86e1792fa09a7dafc23c7cf&units=metric';

let h1 = document.querySelector("⋕city");

axios.get(apiurl).then(displayTemperature);