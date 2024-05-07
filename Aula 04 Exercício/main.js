function mostrarTabuada () {
    const numero = document.querySelector('#numero');
    const resultado = document.querySelector('#resultado');
    resultado.innerText = '';
    for (let i = 0; i <=10; i++) {
        let div = document.createElement('div');
        div.innerText = numero.value * i;
        resultado.appendChild(div);
    }
}