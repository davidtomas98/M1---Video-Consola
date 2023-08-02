// Función para encender la consola al hacer clic en el botón "Reproducir" //
function iniciar() {
    // Obtener el elemento del botón "Reproducir" mediante su ID
    var boton = document.getElementById('boton');
    // Agregar un Event Listener para detectar el clic en el botón y llamar a la función "presionar"
    boton.addEventListener('click', presionar, false);
}

// Función que se ejecuta cuando se hace clic en el botón "Reproducir" //
function presionar() {
    // Obtener el elemento de video mediante su ID
    var video = document.getElementById('video');
    // Mostrar el elemento de video estableciendo su estilo de visualización en "flex"
    video.style.display = "flex";

    // Reproducir el video
    video.play();

    // Obtener el elemento del LED de encendido mediante su ID
    var led_on = document.getElementById('led_on');
    // Agregar la clase "led_on" y eliminar la clase "led" para encender el LED
    led_on.classList.add("led_on")
    led_on.classList.remove("led")
}

// Agregar un Event Listener para detectar cuándo se ha cargado la ventana y ejecutar la función "iniciar" //
window.addEventListener('load', iniciar, false);

// Función para apagar la consola una vez que finaliza el video de inicio //
document.getElementById('video').addEventListener('ended', myHandler, false);

// Función que se ejecuta cuando el video de inicio ha finalizado //
function myHandler(e) {
    // Obtener el elemento del LED de encendido mediante su ID
    var led_on = document.getElementById('led_on');
    // Obtener el elemento de video mediante su ID
    var video = document.getElementById('video');
    // Ocultar el elemento de video estableciendo su estilo de visualización en "none"
    video.style.display = "none";
    // Agregar la clase "led" y eliminar la clase "led_on" para apagar el LED
    led_on.classList.add("led")
    led_on.classList.remove("led_on")
}
