const text = document.querySelector('#text');

function printUserName () {
    let name = prompt('Qual o seu nome? ');
    text.innerText = 'Bem vindo, ' + name + '!';
}

function showYears () {
    let yearBorn = prompt('Qual foi o ano de seu nascimento? ');
    let age = 2024 - yearBorn;
    let p = document.createElement('p');

    if (age >= 18) {
        p.innerText = 'Você tem ' + age + ' anos! Já pode ser preso...';
    } 
    else {
        p.innerText = 'Você tem ' + age + ' anos! Sortudo...';
    }
    document.body.appendChild(p);
}

function changeColor () {
    let input = document.querySelector('#cor');
    let body = document.querySelector('body');
    
    input.addEventListener('input', function(){
        let cor = input.value;
        body.style.background = cor;
    })
}


function showHour () {
    let data = new Date();
    let hour = data.getHours();
    let minutes = data.getMinutes();    
    let seconds = data.getSeconds();

    let div = document.createElement('div');
    div.innerText = '';
    div.innerText = 'O horário atual é: ' + hour + ':' + minutes + ':' + seconds;
    document.body.appendChild(div);
}


/*
function showHour () {
    let data = new Date();
    let hour = data.getHours();
    let minutes = data.getMinutes();    
    let seconds = data.getSeconds();
    let btn = document.querySelector('btn');

    btn.addEventListener('click', function () {
        let div = document.createElement('div');
        div.innerText = '';
        div.innerText = 'O horário atual é: ' + hour + ':' + minutes + ':' + seconds;
        document.body.appendChild(div);
    })
}
*/

printUserName();
showYears();
changeColor();