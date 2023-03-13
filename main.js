const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

const btnCalculate = document.querySelector('form button')
const btnClose = document.querySelector('.modal button')

const title = document.querySelector('.modal-wrapper.title')

const screen2 = document.querySelector('.modal')
const screen3 = document.querySelector('.alertError')

btnCalculate.addEventListener('click', handleClickCalculate)
btnClose.addEventListener('click', handleClickClose)
document.addEventListener('keydown', handleEscKey)


function handleClickCalculate(event){
    event.preventDefault()
    const catchError = notANumber(inputHeight.value) || notANumber(inputWeight.value)
    if (catchError) {
        openAlertError()
        return
    }
    closeAlertError()
    calculateImc()
    screen2.classList.add('open')
    inputHeight.value = ''
    inputWeight.value = ''
}

function handleClickClose(){
    screen2.classList.remove('open')
}

function handleEscKey(event){
    if (event.key === 'Escape') {
        handleClickClose()
    }
}

function notANumber(value){
    return isNaN(value) || value == ''
}

function openAlertError(){
    screen3.classList.add('open')
}

function closeAlertError(){
    screen3.classList.remove('open')
}

function calculateImc() {
   let imc = (inputWeight.value / (inputHeight.value ** 2)).toFixed(2)
    document.querySelector('h2').innerText = `Seu imc é de: ${imc}` 
}
