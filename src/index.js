// Display the time
function displayTime() {
    let time = new Date()
    let timeHours= time.getHours()
    let timeMinutes = time.getMinutes()
    let timeSeconds = time.getSeconds()

    const timeHoursElement = document.getElementById('time-hours')
    const timeMinutesElement = document.getElementById('time-minutes')
    const timeSecondsElement = document.getElementById('time-seconds')
    timeHoursElement.innerText = timeHours
    timeMinutesElement.innerText = timeMinutes
    timeSecondsElement.innerText = timeSeconds
}

setInterval(displayTime, 100)
