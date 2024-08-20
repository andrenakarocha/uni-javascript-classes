const button = document.querySelector('button')
button.addEventListener('click', addNumber)

function addNumber () {
    const number = document.querySelector('h3')
    let currentValue = parseInt(number.innerText)
    let newValue = currentValue + 1
    number.innerText = newValue   
}
