let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSortados = [];
let intentosMaximos = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    if (numeroSecreto == numeroUsuario){
        asignarTextoElemento("p",`Acertaste al número secreto en ${intentos} ${intentos == 1 ? "vez": "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroSecreto > numeroUsuario){
            asignarTextoElemento("p","El número secreto es mayor");
        }
        else{
            asignarTextoElemento("p","El número secreto es menor");
        }
        intentos++;
        limpiarCaja();
    }

    return;     
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * intentosMaximos) + 1;
    console.log(numeroGenerado);
    console.log(listaNumerosSortados);
    //si el número generado esta en la lista
    // si ya llegamos al número maximo de la lista
    if (listaNumerosSortados.length == intentosMaximos) {
        asignarTextoElemento("p", "Ya se sortearon todos los números de la lista");
    } else {
        if (listaNumerosSortados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSortados.push(numeroGenerado);

            return numeroGenerado;

        }
    }
}
     

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto");
    asignarTextoElemento("p", `Indica un número del 1 al ${intentosMaximos}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function reiniciaJuego() {
    //limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //generar numero aleatorio
    //Inicilizar el número de intentos
    condicionesIniciales();
    //Deshabilitar boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled", "true");

}

condicionesIniciales();