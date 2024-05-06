const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');
const data = document.getElementById('data');

const diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

function atualizarRelogio() {
    let agora = new Date();
    let hr = agora.getHours();
    let min = agora.getMinutes();
    let sec = agora.getSeconds();

    hr = hr < 10 ? '0' + hr : hr;
    min = min < 10 ? '0' + min : min;
    sec = sec < 10 ? '0' + sec : sec;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;

    let diaDaSemanaEscrito = diasDaSemana[agora.getDay()];
    let mesEscrito = meses[agora.getMonth()];
    let anoNumerico = agora.getFullYear();
    let diaNumerico = agora.getDate();  // Adicionado para mostrar o dia do mês

    data.textContent = `${diaDaSemanaEscrito}, ${diaNumerico} de ${mesEscrito} de ${anoNumerico}`;
}

setInterval(atualizarRelogio, 1000);

document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('checkbox');
    const bodyElement = document.body;

    checkbox.addEventListener('change', function() {
        if(this.checked) {
            bodyElement.classList.add('light-theme');
        } else {
            bodyElement.classList.remove('light-theme');
        }
        localStorage.setItem('theme', this.checked ? 'light-theme' : '');
    });

    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        bodyElement.classList.add(currentTheme);
        checkbox.checked = (currentTheme === 'light-theme');
    }
});