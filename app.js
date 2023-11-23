const min = document.getElementById('min')
const sec = document.getElementById('sec')
const musica = document.getElementById('musica')
const curto = document.getElementById('curto')
const longo = document.getElementById('longo')
const comecar = document.getElementById('comecar')
const novaTarefa = document.getElementById('novaTarefa')
const concluir = document.getElementById('concluir')
const formulario = document.getElementById('tarefaForm')
const formTexto = document.getElementById('tarefaText')
const tasks = document.getElementById('tarefas')

const segTimer = 1000
const minTimer = segTimer * 60
let time = minTimer * 25 /1000

let isActive = false

let data = []

const checkTimer = () => {
    if (isActive == true){
        comecar.textContent = "Começar"
        isActive = false
        time = minTimer * 25 /1000
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

const addZero = () =>{
    if (sec.textContent.toString().length == 1){
        sec.textContent = 0 + sec.textContent
    }
}

const showForm = () =>{
    formulario.classList.toggle("hidden");
}

const saveTask = () =>{
    data.push(formTexto.value)
    formTexto.value = ""
    localStorage.setItem('data', JSON.stringify(data))
    console.log(localStorage.getItem('data'));
    showForm()
    displayTask()
}

const displayTask = () =>{
    const localData = JSON.parse(localStorage.getItem('data'))
    console.log(localData.length)
    localData.forEach(element => {
        tasks.appendChild(newLine(
            element.nome, element.email, element.id
        ))
}

const newLine = (nome, email, id) => {
    const newTask = document.createElement('tr')
    const content = `<div><p>${localData[i-1]}</p></div><br>`
    newTask.innerHTML = content
    return newClient
 }