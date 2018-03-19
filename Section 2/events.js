const events = require('events');

var emitter = new events.EventEmitter();

emitter.on('Saludo', (message)=>{
  console.log(`Message: ${message}`);
});

emitter.emit('Saludo', 'Hola mundo'); 
