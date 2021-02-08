function showTemperature(response) {
    let temperatureElement = document.querySelector(⋕temeperature);
    let cityElement = document.querySelector(⋕city);
    let descriptionElement = document.querySelector(⋕description);
    let humidityElement = document.querySelector(⋕himudity);
    let windElement = document.querySelector(⋕wind);
    temperatureElemtnt.InnerHTML = math.round(response.data.main.temp);
    cityElement = response.data.name;
    descriptionElement.InnerHTML = response.data.weather[0].description.;
    himudityElement.InnerHTML = response.data.main.himudity;
    windElement.InnerHTML = math.round(respond.data.wind.speed);
}
let apikey = "db19e864f86e1792fa09a7dafc23c7cf";
let apiurl = "api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";

let h1 = document.querySelector(⋕city);

Axios.get(apiurl).then(showTemperature);