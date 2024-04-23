let diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const dataCP2 = new Date('2024-04-30');
const dataCP3 = new Date('2024-05-14');
const dataSprint1 = new Date('2024-06-17');
const dataGS = new Date('2024-05-27');

const datas = [
    {
        nome: 'CP2',
        dia: dataCP2.getDate() + 1,
        mes: meses[dataCP2.getMonth()],
        ano: dataCP2.getFullYear(),
        diaDaSemana: diasDaSemana[dataCP2.getDay() + 1],
        nota: Math.floor(Math.random() * 10 + 0)
    },
    {
        nome: 'CP3',
        dia: dataCP3.getDate() + 1,
        mes: meses[dataCP3.getMonth()],
        ano: dataCP3.getFullYear(),
        diaDaSemana: diasDaSemana[dataCP3.getDay() + 1],
        nota: Math.floor(Math.random() * 10 + 0)
    },
    {
        nome: 'Sprint',
        dia: dataSprint1.getDate() + 1,
        mes: meses[dataSprint1.getMonth()],
        ano: dataSprint1.getFullYear(),
        diaDaSemana: diasDaSemana[dataSprint1.getDay() + 1],
        nota: Math.floor(Math.random() * 10 + 0)
    },
    {
        nome: 'GS',
        dia: dataGS.getDate() + 1,
        mes: meses[dataGS.getMonth()],
        ano: dataGS.getFullYear(),
        diaDaSemana: diasDaSemana[dataGS.getDay() + 1],
        nota: Math.floor(Math.random() * 10 + 0)
    }
]


for(let i = 0; i < datas.length; i++) {
    
    let data = `${datas[i].diaDaSemana}, ${datas[i].dia}/${datas[i].mes}/${datas[i].ano}`
    console.log(
        `
            \n ---${datas[i].nome}--- 
            \n ${datas[i].nome} muito foda 
            \n Data: ${data} 
            \n Nota: ${datas[i].nota}
        `
    )
}

