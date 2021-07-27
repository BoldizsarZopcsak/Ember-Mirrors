// Display the time
function displayTime() {
    let time = new Date()
    let timeHours= time.getHours()
    let timeMinutes = time.getMinutes()

    const timeHoursElement = document.getElementById('time-hours')
    const timeMinutesElement = document.getElementById('time-minutes')
    
    timeHoursElement.innerText = String(timeHours).padStart(2, "0")
    timeMinutesElement.innerText = String(timeMinutes).padStart(2, "0")
}

setInterval(displayTime, 100)
