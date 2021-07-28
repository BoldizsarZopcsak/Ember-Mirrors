// Display the time
let weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let month = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]

setInterval(displayTime, 200)

function displayTime() {
    let time = new Date()
    let timeHours= time.getHours()
    let timeMinutes = time.getMinutes()
    let dayOfTheWeek = time.getDay()
    let date = time.getDate()
    let monthOfTheYear = time.getMonth()

    const timeHoursElement = document.getElementById('time-hours')
    const timeMinutesElement = document.getElementById('time-minutes')
    const dayOfTheWeekElement = document.getElementById('dayOfTheWeek')
    const dateElement = document.getElementById('date')
    const monthOfTheYearElement = document.getElementById('monthOfTheYear')
    
    timeHoursElement.innerText = String(timeHours).padStart(2, "0")
    timeMinutesElement.innerText = String(timeMinutes).padStart(2, "0")
    dayOfTheWeekElement.innerText = weekday[dayOfTheWeek]
    dateElement.innerText = date
    monthOfTheYearElement.innerText = month[monthOfTheYear]
}

function weatherBalloon(cityName) {
    var key = 'b2b7f3f4accd7e1a191d93c7dd481571';
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
        const weatherIconElement = document.getElementById('weatherIcon')
        const icon = data.weather[0].icon
        document.getElementById('weatherIcon').src = "../assets/icons/01d.png"

        const temperatureElement = document.getElementById('temperature')
        temperatureElement.innerText = Math.round(parseFloat(data.main.temp) - 273.15) + '\xB0';
    })
    .catch(function() {
        // catch any errors
    });
}
  
window.onload = function() {
    weatherBalloon('Munich');
}
