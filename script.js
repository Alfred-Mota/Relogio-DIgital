function updateTime(){
    const display = document.querySelector(".display")

    const time = new Date()

    formattedTime(time, display)

    
}

function formattedTime(time, display){
    let hour = String(time.getHours()).padStart(2,'0')
    let minutes = String(time.getMinutes()).padStart(2,'0')
    let seconds = String(time.getSeconds()).padStart(2,'0')

    let currentTime = hour + ':' + minutes + ':' + seconds

    display.textContent = currentTime
}
updateTime()
setInterval(updateTime,1000)

