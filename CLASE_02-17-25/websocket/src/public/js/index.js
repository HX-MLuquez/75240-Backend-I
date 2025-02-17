console.log("IN CLIENT");

const userName = document.querySelector(".userName");
const chatMessage = document.querySelector(".chatMessage");
var uuid = "";

//* Conexión con el servidor de Socket.IO


//* Lista de mensajes a renderizar en el chat
var messages = [];


//* Función para actualizar los mensajes en el chat
const updateMessagges = (newMessages) => {
};


//* Formulario de entrada de usuario con SweetAlert2
// Mostrar el formulario de entrada de usuario


//* Evento de conexión con el servidor


//* Enlace de eventos de los botones de la interfaz - al DOM
const btnMessage = document.getElementById("btnMessage");
const inputMessage = document.getElementById("inputMessage");


//* Función para enviar un mensaje al servidor


//* Evento para escuchar mensajes nuevos del servidor y actualizar la lista de mensajes




/*
Los eventos de Socket.IO son asíncronos, lo que significa que no podemos detener el flujo 
de la aplicación esperando una respuesta directa. 
Para manejar esto, podemos:

1. Usar callbacks proporcionados por el cliente o el servidor.
2. Emitir eventos personalizados y escuchar las respuestas por separado.

Esto permite que el flujo de la aplicación continúe mientras se gestionan las respuestas.
*/
