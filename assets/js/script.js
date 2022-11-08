const APIKey = '9cff359740d619b80effc7ca22fd6308'
const today = moment().format('M/D/YYYY')

let citySearchInput = document.getElementById('cityInput')
let citySearch = ''
let searchButton = document.getElementById('searchButton')
let sameDayURL = ''

searchButton.addEventListener('click', function(){
    citySearch = citySearchInput.value

    sameDayURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + '&appid=' + APIKey + '&units=imperial'

    console.log(citySearch)

    let history = JSON.parse(localStorage.getItem('cities'))
    history.push(citySearch)
    localStorage.setItem('cities', JSON.stringify(history))

    SetWeather()
    displaySearches()
})

function SetWeather() {
    fetch(sameDayURL)
    .then(function(response2) {
        return response2.json
    })
    .then(function(dailyWeather) {

        let todayTemp = dailyWeather.main.temp
        let todayWind = dailyWeather.wind.speed
        let todayHumidity = dailyWeather.main.humidity
        let todayIconCode = dailyWeather.weather[0].icon
        let todayIcon = 'https://openweathermap.org/img/w/' + todayIconCode + '.png'
    

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

    let getLatLongURL = 'https://api.openweathermap.org/geo/1.0/direct?q=' + citySearch + '&limit=1&appid=' + APIKey
    fetch(getLatLongURL)
    .then(function(response) {
        return response.json()
    })

    .then(function(latLong) {
        let cityLat = latLong[0].lat
        let cityLong = latLong[0].lon
        let FiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + cityLat + '&lon=' + cityLong + '&appid=' + APIKey + '&units=imperial'
        fetch(FiveDayURL)
        .then(function(response3) {
            return response3.json()
        })
        .then(function(fiveDay) {
            console.log(fiveDay)

            let dayOne = moment().add(1, 'd').format('M/D/YYYY')
            let dayOneTemp = fiveDay.list[5].main.todayTemp
            let dayOneWind = fiveDay.list[5].wind.speed
            let dayOneHumidity = fiveDay.list[5].main.humidity
            let dayOneIconCode = fiveDay.list[5].weather[0].icon
            let dayOneIcon = 'https:openweathermap.org/img/w/' + dayOneIconCode + '.png'

            let dayTwo = moment().add(2, 'd').format('M/D/YYYY')
            let dayTwoTemp = fiveDay.list[13].main.todayTemp
            let dayTwoWind = fiveDay.list[13].wind.speed
            let dayTwoHumidity = fiveDay.list[13].main.humidity
            let dayTwoIconCode = fiveDay.list[13].weather[0].icon
            let dayTwoIcon = 'https:openweathermap.org/img/w/' + dayTwoIconCode + '.png'

            let dayThree = moment().add(3, 'd').format('M/D/YYYY')
            let dayThreeTemp = fiveDay.list[21].main.todayTemp
            let dayThreeWind = fiveDay.list[21].wind.speed
            let dayThreeHumidity = fiveDay.list[21].main.humidity
            let dayThreeIconCode = fiveDay.list[21].weather[0].icon
            let dayThreeIcon = 'https:openweathermap.org/img/w/' + dayThreeIconCode + '.png'

            let dayFour = moment().add(4, 'd').format('M/D/YYYY')
            let dayFourTemp = fiveDay.list[29].main.todayTemp
            let dayFourWind = fiveDay.list[29].wind.speed
            let dayFourHumidity= fiveDay.list[29].main.humidity
            let dayFourIconCode = fiveDay.list[29].weather[0].icon
            let dayFourIcon = 'https:openweathermap.org/img/w/' + dayFourIconCode + '.png'

            let dayFive = moment().add(5, 'd').format('M/D/YYYY')
            let dayFiveTemp = fiveDay.list[37].main.temp
            let dayFiveWind = fiveDay.list[37].wind.speed
            let dayFiveHumidity = fiveDay.list[37].main.humidity
            let dayFiveIconCode = fiveDay.list[37].weather[0].icon
            let dayFiveIcon = 'https:openweathermap.org/img/w/' + dayFiveIconCode + '.png'

            let forecastDayOne = document.getElementById('d-1')
            let OneDayTemp = document.getElementById('t-1')
            let OneDayWind = document.getElementById('w-1')
            let OneDayHumidity = document.getElementById('h-1')

            forecastDayOne.textContent = dayOne
            OneDayTemp.textContent = dayOneTemp
            OneDayWind.textContent = dayOneWind
            OneDayHumidity.textContent = dayOneHumidity

            let icon1 = document.getElementById('icon1')
            icon1.setAttribute('src', dayOneIcon)

            let forecastDayTwo = document.getElementById('d-2')
            let TwoDayTemp = document.getElementById('t-2')
            let TwoDayWind = document.getElementById('w-2')
            let TwoDayHumidity = document.getElementById('h-2')

            forecastDayTwo.textContent = dayTwo
            TwoDayTemp.textContent = dayTwoTemp
            TwoDayWind.textContent = dayTwoWind
            TwoDayHumidity.textContent = dayTwoHumidity

            let icon2 = document.getElementById('icon2')
            icon2.setAttribute('src', dayTwoIcon)

            let forecastDayThree = document.getElementById('d-3')
            let ThreeDayTemp = document.getElementById('t-3')
            let ThreeDayWind = document.getElementById('w-3')
            let ThreeDayHumidity = document.getElementById('h-3')

            forecastDayThree.textContent = dayThree
            ThreeDayTemp.textContent = dayThreeTemp
            ThreeDayWind.textContent = dayThreeWind
            ThreeDayHumidity.textContent = dayThreeHumidity

            let icon3 = document.getElementById('icon3')
            icon3.setAttribute('src', dayThreeIcon)

            let forecastDayFour = document.getElementById('d-4')
            let FourDayTemp = document.getElementById('t-4')
            let FourDayWind = document.getElementById('w-4')
            let FourDayHumidity = document.getElementById('h-4')

            forecastDayFour.textContent = dayFour
            FourDayTemp.textContent = dayFourTemp
            FourDayWind.textContent = dayFourWind
            FourDayHumidity.textContent = dayFourHumidity

            let icon4 = document.getElementById('icon4')
            icon4.setAttribute('src', dayFourIcon)

            let forecastDayFive = document.getElementById('d-5')
            let FiveDayTemp = document.getElementById('t-5')
            let FiveDayWind = document.getElementById('w-5')
            let FiveDayHumidity = document.getElementById('h-5')

            forecastDayFive.textContent = dayFive
            FiveDayTemp.textContent = dayFiveTemp
            FiveDayWind.textContent = dayFiveWind
            FiveDayHumidity.textContent = dayFiveHumidity

            let icon5 = document.getElementById('icon5')
            icon5.setAttribute('src', dayFiveIcon)
        })
    })
}

        function onLoad() { 

            let history = JSON.parse(localStorage.getItem('cities'))
            if(history === null) {
                history = []
                localStorage.setItem('cities', JSON.stringify(history))
            }else {
            displaySearches()
        }}

        onLoad()

        function displaySearches() {
            let history = JSON.parse(localStorage.getItem('cities'))
            console.log(history)

            let historyDiv = document.getElementById('pastSearch')
            while (historyDiv.firstChild) {
                historyDiv.removeChild (historyDiv.firstChild)
            }

            for(let i=history.length-1; i>=0; i--) {
                let button = document.createElement('button')
                button.innerHTML=history[i]
                historyDiv.appendChild(button)

                button.addEventListener('click', function(e) {
                    citySearch=e.target.innerHTML

                    sameDayURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch + 'appid=' + APIKey + '&units=imperial'

                    console.log(citySearch)

                    SetWeather()
                })
            }
        }
