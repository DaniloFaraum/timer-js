const min = document.getElementById('min')
const sec = document.getElementById('sec')
const musica = document.getElementById('musica')
const curto = document.getElementById('curto')
const longo = document.getElementById('longo')
const comecar = document.getElementById('comecar')

const segTimer = 1000
const minTimer = segTimer * 60
let time = minTimer * 25 /1000
let currentInterval = minTimer * 25 /1000

let isActive = false

const checkTimer = () => {
    if (isActive == true){
        resetTimer()
    }
    else{
        comecar.textContent = "Cancelar"
        startTimer()
    }
}

const startTimer = () => {
    isActive = true
    const timerInterval = setInterval(() => {
        let minutes = Math.floor(time / 60)
        let seconds = time % 60
        min.textContent = minutes
        sec.textContent = seconds
        addZero()
        if (time <= 0 || isActive == false) {
            clearInterval(timerInterval)
        } 
        else {
            time--
        }
    }, segTimer)
}


const changeInterval = (newTime) =>{
    currentInterval = newTime
    time = currentInterval
    min.textContent = Math.floor(time / 60)
    sec.textContent = "00"
    resetTimer()
}

const resetTimer = () =>{
    comecar.textContent = "Começar"
    isActive = false
    time = currentInterval
}

const addZero = () =>{
    if (sec.textContent.toString().length == 1){
        sec.textContent = 0 + sec.textContent
    }
}