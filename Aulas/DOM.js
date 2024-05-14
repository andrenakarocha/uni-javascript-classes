function selecting_elements () {
    document.getElementById('elem'); // Usando ID
    document.getElementsByTagName('elem'); // Usando nome da Tag
    document.getElementsByClassName('elem'); // Usando Class
    document.querySelector('#elem'); // Seletor CSS
}

function manipulating_content () {
    element = document.querySelector('#elem');
    element.innerHTML = '<p>Example</p>';
    element.getAttribute('src'); // Obtém o valor de um atributo específico
    element.setAttribute('src', 'imagem.png');
    element.classList.add('newClass'); // Adiciona uma nova classe 
    element.classList.remove('class'); // Remove uma classe 
}

function create_new_element () {
    const newParagraph = document.createElement("p"); // Cria um novo elemento <p>
    newParagraph.textContent = 'New Paragraph'; // Adiciona o texto
    document.body.appendChild(newParagraph); // Adiciona o parágrafo ao body do documento
}

function modify_element () {
    const elem = document.querySelector('#elem'); // Seleciona o elemento
    elem.textContent = 'New text here'; // Modifica o elemento
}

function remove_element () {
    const elem = document.querySelector('#elem'); // Seleciona o elemento
    
}

function manipulate_CSS () {
    const elem = document.querySelector('#elem'); // Seleciona o elemento
    elem.style.color = 'red'; // Modifica o estilo do elemento
    elem.style.fontSize = '20px'; // Modifica o estilo do elemento
}

// EVENTOS COMUNS: Click, Mouseover, Keydown, Submit, Load.
function event_listener () {
    const elem = document.querySelector('#elem'); // Seleciona o elemento
    elem.addEventListener('click', theFunction); // Assim que clicarem no elemento, a função é executada
    elem.removeEventListener('cliclk', theFunction); // Remove o evento.
}

// EVENTOS COM ATRIBUTOS HTML: onMouseOver, onMouseOut, onClick