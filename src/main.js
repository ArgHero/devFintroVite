import './style.css';

const numeroSecreto = Math.floor(Math.random() * 100) + 1;
const inputNumero = document.getElementById('numero');
const botonAdivinar = document.getElementById('adivinar');
const mensaje = document.getElementById('mensaje');
const btnMenos = document.getElementById("btnMenos");
const btnMas = document.getElementById("btnMas");

btnMenos.addEventListener("click",()=>{
    const valor=parseInt(inputNumero.value)
    inputNumero.value = valor-1;
})

btnMas.addEventListener("click",()=>{
    const valor=parseInt(inputNumero.value)
    inputNumero.value = valor+1;
})

inputNumero.addEventListener("change",()=>{
    const valor=parseInt(inputNumero.value)
    if(valor >100)
        inputNumero.value="100"
    else if (valor < 0)
        inputNumero.value="0"
    else
        inputNumero.value="0"

})

botonAdivinar.addEventListener('click', () => {
    const numeroJugador = parseInt(inputNumero.value);

    if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
        mensaje.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    } else if (numeroJugador === numeroSecreto) {
        mensaje.textContent = '¡Felicidades! ¡Adivinaste el número!';
    } else if (numeroJugador < numeroSecreto) {
        mensaje.textContent = 'El número es más alto.';
    } else {
        mensaje.textContent = 'El número es más bajo.';
    }
});