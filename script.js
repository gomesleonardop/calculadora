const teclasNumeros = [...document.querySelectorAll('.num')];
const teclasOperadores = [...document.querySelectorAll('.op')];
const teclaRes = document.querySelector('.res');
const display = document.querySelector('#display');
const tcpy = document.querySelector('#tcpy');
const tlimpar = document.querySelector('#tlimpar');
const tigual = document.getElementById('tigual');

let sinal = false;
let virgula = false;

teclasNumeros.map((el) => {
    el.addEventListener('click', (evt) => {
        sinal = false;
        if (evt.target.innerHTML == '.') {
            if(!virgula){
                virgula = true;
                if (display.innerHTML == '0') {
                    display.innerHTML = '0.'
                } else {
                    display.innerHTML += evt.target.innerHTML;
                }
            }
        } else {
            if (display.innerHTML == '0') {
                display.innerHTML = '';
            }
            display.innerHTML += evt.target.innerHTML;
        }
    });
});

teclasOperadores.map((el) => {
    el.addEventListener('click', (evt) => {
        virgula = false;
        if (!sinal){
            sinal = true;
            if (display.innerHTML == '0') {
                display.innerHTML = '';
            }
            if (evt.target.innerHTML == 'x'){
                display.innerHTML = '*';
            } else {
                display.innerHTML += evt.target.innerHTML;
            }
        }
    });
});

tlimpar.addEventListener('click', () => {
    sinal = false;
    virgula = false;
    display.innerHTML = 0;
});

tigual.addEventListener('click', () => {
    sinal = false;
    virgula = false;
    let res = eval(display.innerHTML);
    display.innerHTML = res;
});

tcpy.addEventListener('click', () => {
    navigator.clipboard.writeText(display.innerHTML);
});