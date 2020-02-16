const {io} = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje',{
        usuario: 'administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });
    
    client.on('disconnect',()=>{
        console.log('Usuario desconectado');
    });

    client.on('enviarMensaje',(data,callback)=>{
        
        client.broadcast.emit('enviarMensaje', data)

        console.log(data);

        // if(msm.usuario){
        //     callback({
        //         message:'TODO SALIO BIEN!'
        //     });
        // }else{
        //     callback({
        //         message:'TODO SALIO MAL!'
        //     });
        // }
    });

})