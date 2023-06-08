const body = document.querySelector('body');
const span = document.querySelector('.color');
const boton = document.querySelector('.generar_color');

const coloresAleatorios = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];

boton.addEventListener('click', () => {
    let hexadecimal = '#';
    for (let i = 0; i < 6; i++) {
        hexadecimal += coloresAleatorios[hexrandom()];
        span.textContent = hexadecimal;
        body.style.backgroundColor = hexadecimal;
    }
})

function hexrandom() {
    return Math.floor(Math.random() * coloresAleatorios.length);
}