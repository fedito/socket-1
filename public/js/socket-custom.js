let socket = io();
socket.on('connect', function() {
    console.log('conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdida conexion con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Federico',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
})