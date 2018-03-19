const emitter = require('events');

function saludar(){
  emitter.emit('Saludo', 'Hola, mundo');
}
