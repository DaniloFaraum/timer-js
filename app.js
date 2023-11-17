const min = document.getElementById('min')
const sec = document.getElementById('sec')
const musica = document.getElementById('musica')
const curto = document.getElementById('curto')
const longo = document.getElementById('longo')
const comecar = document.getElementById('comecar')
const novaTarefa = document.getElementById('novaTarefa')
const concluir = document.getElementById('concluir')

const segTimer = 1000
const minTimer = segTimer * 60
let time = minTimer * 25 /1000

let isActive = false

const checkTimer = () => {
    if (isActive == true){
        comecar.textContent = "start"
        isActive = false
        time = minTimer * 25 /1000
    }
    else{
        comecar.textContent = "cancelar"
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
        if (time <= 0 || isActive == false) {
            clearInterval(timerInterval)
        } 
        else {
            time--
        }
    }, segTimer)
}