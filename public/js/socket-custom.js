var socket =io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function(){
    console.log('perdimos Conexion al servidor');
});

socket.emit('enviarMensaje',{
    usuario: 'camilo',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('se disparo el callback y su mensaje es',resp);
});

socket.on('enviarMensaje', function(respuesta){
    console.log('respuesta', respuesta);
});