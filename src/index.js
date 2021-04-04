// Display the time
function displayTime() {
    let time = new Date()
    let timeHours= time.getHours()
    let timeMinutes = time.getMinutes()
    let timeSeconds = time.getSeconds()

    const timeHoursElement = document.getElementById('time-hours')
    const timeMinutesElement = document.getElementById('time-minutes')
    const timeSecondsElement = document.getElementById('time-seconds')
    
    timeHoursElement.innerText = String(timeHours).padStart(2, "0")
    timeMinutesElement.innerText = String(timeMinutes).padStart(2, "0")
    timeSecondsElement.innerText = String(timeSeconds).padStart(2, "0")

    // Move sursor slightly to hide it
    let cursor = document.getElementById("cursor");
    cursor.style.left = 10 + "px";
    cursor.style.top = 10 + "px";
}

setInterval(displayTime, 100)
