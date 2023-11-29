const novaTarefa = document.getElementById('novaTarefa')
const concluir = document.getElementById('concluir')
const formulario = document.getElementById('tarefaForm')
const formTexto = document.getElementById('tarefaText')
const tasks = document.getElementById('tarefas')

let data = []

const showForm = () =>{
    formulario.classList.toggle("hidden");
}

const saveTask = () =>{
    data.push({
        content: formTexto.value,
        completed: false
    })
    formTexto.value = ""
    localStorage.setItem('data', JSON.stringify(data))
    showForm()
    displayTask()
}

const displayTask = () =>{
    const localData = JSON.parse(localStorage.getItem('data'))
    console.log(localData)
    for (let i = 0; i <= localData.length; i++){
        console.log(localData[1]);
        // const newTask = document.createElement('div')
        // const content = `<p>${localData[1]}</p>`
        // newTask.innerHTML = content
        // tasks.appendChild(newTask)
        tasks.innerHTML = `<p>${localData[1]}</p>`
    }
    // localData.forEach(element => {
    //     tasks.appendChild(newLine(
    //         element.nome, element.email, element.id
    //     ))
    //     }
    // )
}

// const newLine = () => {
//   //  const localData = JSON.parse(localStorage.getItem('data'))
//     const newTask = document.createElement('div')
//     const content = `<p>${localData[i-1]}</p>`
//     newTask.innerHTML = content
//     return newClient
//     }