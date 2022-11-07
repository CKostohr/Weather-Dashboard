const APIKey = "90a5a0fd17c8d2e0dfa9c4cd8c6be0cd"
const today = moment().format(MM/DD/YYYY)

let citySearchInput = document.getElementById('cityInput')
let citySearch = ''
let searchButton = document.getElementById('searchButton')

searchButton.addEventListener('click', function(){
    citySearch = citySearchInput.value

    sameDayURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + 'appid=' + APIKey + '&units=imperial'

    let history = JSON.parse(localStorage.getItem('cities'))
    history.push(citySearch)
    localStorage.setItem('cities', JSON.stringify(history))

    SetWeather()
    displaySearches()
})

function SetWeather() {
    fetch(sameDayURL)
    .then(function(reponse2) {
        return respone2.JSON
    })
    .then(function(dailyWeather) {

        let todayTemp = dailyWeather.main.todayTemp
        let todayWind = dailyWeather.wind.speed
        let todayHumidity = dailyWeather.main.todayHumidity
        let todayIconCode = dailyWeather.weather[0].todayIconCode
        let todayIcon = 'https:openweather.org/img/w/' +todayIconCode + '.png'
    

        let chosenCity = document.getElementById('c-City')
        let currentTemp = document.getElementById('c-Temp')
        let currentWind = document.getElementById('c-Wind')
        let currentHumidity = document.getElementById('c-Humidity')

        chosenCity.textContent = citySearch + '' + today
        currentTemp.textContent = todayTemp
        currentWind.textContent = todayWind
        currentHumidity.textContent = todayHumidity

        let icon = document.getElementById('c-Icon')
        icon.setAttribute('src', todayIcon)
    })

}
