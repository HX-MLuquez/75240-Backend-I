document.addEventListener("DOMContentLoaded", () => {
  console.log("IN CLIENT");

  const userName = document.querySelector(".userName");
  const chatMessage = document.querySelector(".chatMessage");
  var uuid = "";

  //* Conexión con el servidor de Socket.IO
  const socket = io();

  //* Lista de mensajes a renderizar en el chat
  var messages = [];

  //* Función para actualizar los mensajes en el chat
  const updateMessagges = (newMessages) => {
    const chat = document.getElementById("chat");
    chat.innerHTML = "";
    newMessages.forEach((message) => {
      const messageElement = document.createElement("div");
      messageElement.innerHTML = `${message.message}`;
      chat.appendChild(messageElement);
    });
  };

  //* Formulario de entrada de usuario con SweetAlert2
  // Mostrar el formulario de entrada de usuario

  //* Evento de conexión con el servidor
  socket.on("connect", () => {
    console.log("Conectado al servidor de Socket.IO");
  });

  //* Enlace de eventos de los botones de la interfaz - al DOM
  const btnMessage = document.getElementById("btnMessage");
  const inputMessage = document.getElementById("inputMessage");

  //* Función para enviar un mensaje al servidor
  btnMessage.addEventListener("click", () => {
    const message = {
      message: inputMessage.value,
    };
    socket.emit("userMessage", message);
    console.log("Mensaje enviado:", message);
    inputMessage.value = "";
  });

  //* Evento para escuchar mensajes nuevos del servidor y actualizar la lista de mensajes
  socket.on("messageReceived", (message) => {
    console.log("Mensaje recibido del servidor:", message); // Log para verificar la recepción del mensaje
    messages.push(message);
    updateMessagges(messages);
  });

  //* Evento para recibir el historial de mensajes del servidor
  socket.on("messageHistory", (messageHistory) => {
    console.log("Historial de mensajes recibido del servidor:", messageHistory); // Log para verificar la recepción del historial de mensajes
    messages = messageHistory;
    updateMessagges(messages);
  });
});
