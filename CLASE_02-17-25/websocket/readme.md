# WebSockets

## Introducción

Los WebSockets son una tecnología que proporciona un canal de comunicación bidireccional y full-duplex sobre un único socket TCP. Está diseñada para ser implementada en navegadores y servidores web, pero puede utilizarse por cualquier cliente o servidor.



Referencias para:
- [WebSockets](https://developer.mozilla.org/es/docs/WebSockets)
- [Handlebars](https://handlebarsjs.com/)
- [Express](https://expressjs.com/es/)
- [Node.js](https://nodejs.org/es/)
- [Socket.io](https://socket.io/)
- [SweetAlert2](https://sweetalert2.github.io/)

Para despliegue en Glitch:
- [Glitch](https://glitch.com/)


Diferencias entre WebSockets y HTTP
- [Diferencias](https://lab.wallarm.com/what/websocket-frente-a-http/?lang=es)


---


- socket-emit :envía un mensaje solo al cliente que inició la conexión actual. 
- io.emit(event, data): Envía un mensaje a TODOS los clientes conectados al servidor. 
- socket.broadcast.emit: Envía un mensaje a todos los clientes conectados excepto al que lo envió. 
- io.to-(socketId).emit(event, data): Envía un mensaje a un usuario específico usando su socketId.


---

Enlace al Repo bien Modularizado de este mismo proyecto

- https://github.com/HX-MLuquez/chat-test