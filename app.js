const body = document.querySelector('body');
const span = document.querySelector('.color');
const boton = document.querySelector('.generar_color');

const coloresAleatorios = ['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Brown', 'Silver', 'Orange', 'Purple'];

boton.addEventListener('click', () => {
    let aleatorio = coloresAleatorios[random()];
    span.textContent = aleatorio;
    body.style.backgroundColor = aleatorio;
})

function random() {
    return Math.floor(Math.random() * coloresAleatorios.length);
}