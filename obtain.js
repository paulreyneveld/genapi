const axios = require('axios');
const api = require('./api.json');

let newsUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api.newsKey}`;
let weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=45.5051&lon=-122.6750&
exclude=minutely,hourly&appid=${api.weatherKey}`;

// Function to print out headlines. 
function printHeadlines() {
    console.log("Headlines");    
}

// get info
function getData(url) {
    axios.get(url)
    .then(res => {
        console.log(res.data);
    })
    .catch(err => {
        console.log(err);
    })
}

getData(weatherUrl);
getData(newsUrl);

