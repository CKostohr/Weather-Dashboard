var APIKey = "9cff359740d619b80effc7ca22fd6308";

var city;

var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)