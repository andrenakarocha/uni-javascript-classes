//criar uma calculadora
function calculadora () {
    const operacao = Number(prompt('Escolha uma opção:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - multiplicacao (*)\n 4 - divisão real (/)\n 5 - divisão inteira (%)\n 6 - potenciação (**)'));

    //verificar se a operação é válida
    if (!operacao || operacao >= 7) {
        alert('ERRO - Operação Inválida - Escolha um número entre 1 e 6');
        calculadora();
    }
    else {

        //defifindo variáveis
        let n1 = Number(prompt('Insira o primeiro valor: '));
        let n2 = Number(prompt('Insira o segundo valor: '));
        let resultado;

        //verificando se as variáveis são válidas
        if(!n1 || !n2) {
            alert('ERRO - Parâmetros inválidos!');
            calculadora()
        }
        else {

            //definindo operações
            function soma() {
                //define o resultado
                resultado = n1 + n2;
                //alerta o resultado
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao()
            }

            function subtracao () {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao()
            }

            function multiplicacao () {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao()
            }

            function divisaoreal () {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperacao()
            }

            function divisaointeira () {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperacao()
            }

            function potenciacao () {
                resultado = n1 ** n2;
                alert(`O número ${n1} elevado a ${n2} é igual a ${resultado}`);
                novaOperacao()
            }
            
            //nova operação
            function novaOperacao() {
                let opcao = prompt('Deseja fazer uma outra operação? 1 - Sim / 2 - Não')
                if (opcao == 1) {
                    calculadora()
                }
                else if (opcao == 2){
                    alert('Até mais!')
                }
                else {
                    alert('Mensagem inválida!')
                }
            }
        }
    }
    //chamando as operações para cada case
    switch(operacao) {
        case 1: 
            soma();
            break
        case 2: 
            subtracao();
            break
        case 3: 
            multiplicacao();
            break
        case 4: 
            divisaoreal();
            break
        case 5: 
            divisaointeira();
            break
        case 6: 
            potenciacao();
            break
    }
}

calculadora();