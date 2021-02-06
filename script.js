function showTemperature(response) {
    let temperatureElement = document.querySelector(⋕temeperature);
    let cityElement = document.querySelector(⋕city);
    let descriptionElement = document.querySelector(⋕description);
    temperatureElemtnt.InnerHTML = math.round(response.data.main.temp);
    cityElement = response.data.name;
    descriptionElement.InnerHTML = response.data.weather[0].description.;
}
let apikey = "db19e864f86e1792fa09a7dafc23c7cf";
let apiurl = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";

let h1 = document.querySelector(⋕city);

Axios.get(apiurl).then(showTemperature);