let numeroSecreto = 0;  //creo mi variable y llamo la funcion que cree.
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);  //Document me sirve para interacturar con h1, puente entre js y html. 
    elementoHTML.innerHTML = texto;  //Este me sirve para mostrar el titulo. Encapsulo el elemento y texto.
    return;
}
//Llamamos a la funcion que estamos declarando 
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //llamo al input que esta en mi html.  // usuamos esta funcion para llamar los id. el valuvalor  me devuelve un valor
 
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);  //Puedo indicarle una funcion dentro de otra, usamos el operador ternario resumen del if else
        document.getElementById('reiniciar').removeAttribute('disabled'); //Activamos el boton NUevo Juego
    } else {
        //El usuario no acerto.
        if(numeroDeUsuario > numeroSecreto){   //Implemento la logica, para ayuda del usuario.
            asignarTextoElemento('p','El numero secreto es menor'); 
        }else{
            asignarTextoElemento('p','El numero secreto es mayor'); 
        }
        intentos++;
        limpiarCaja(); //Llamamos a la funcion limpiar

    }
    return;

}

//Funcion para limpiar, cuando el usuario no acierta
function limpiarCaja(){
   document.querySelector('#valorUsuario').value = '';   //Llamamos al valor valorusuario el cual si la persona no acierta se limpia la pantalla

}

function generarNumeroSecreto() {
     let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;  // retorno el numero secreto de mi variable numeroSecreto

     console.log(numeroGenerado);
     console.log(listaNumerosSorteados);
     //Si ya sorteamos todos los numeros 
     if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles'); //validador si todos los numeros posibles ya feron usados mostramos este mensaje

     }else {


     //Si el numero generado esta inlcuido en la lista 
     

     if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();

     }else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto!'); //Llamo a la funcion
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);  
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//Funcion que realiza el reinicio el juego
function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros 
    //Generar el numero aleatorio
    //Inicializar el numero intentos
    condicionesIniciales();

    //Desahabiitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disable', 'true');


}
condicionesIniciales();




