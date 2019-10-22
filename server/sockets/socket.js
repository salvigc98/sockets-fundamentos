
const { io } = require('../server');

io.on('connection', (client) =>{

    console.log('usuario conectado');

    // Mensaje de bienvenida cuando se conecta un usuario

    client.emit('enviarMensaje', {
        usuario: 'Administrador', 
        mensaje: 'bienvenido a la aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar el cliente

    client.on('enviarMensaje', (data, callback) =>{

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if( mensaje.usuario) {
        //     callback({
        //         resp: 'todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'todo salio mal'
        //     });
        // }
        
    });

});