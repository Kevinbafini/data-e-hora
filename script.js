const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const agora = new Date();
const diaDaSemanaNumero = agora.getDay();
const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const diaDaSemanaEscrito = diasDaSemana[diaDaSemanaNumero];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
const mesEscrito = meses[agora.getMonth()];
const anoNumerico = agora.getFullYear();

const relogiodigital = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;

    data.innerHTML = `${diaDaSemanaEscrito}, ${diaDaSemanaNumero} de ${mesEscrito} de ${anoNumerico}`
})