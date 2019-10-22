var socket = io();

        socket.on('connect', function() {
            console.log('conectado al servidor');
        });

        // Escuchar(on)
        socket.on('disconnect', function() {
            console.log('perdemos conexion');
        });

        // Enviar informacion(emit)
        socket.emit('enviarMensaje', {
            usuario: 'salva',
            mensaje: 'hola mundo'
        }, function(resp) {
            console.log(resp);
        });

        // Escuchar informacion
        socket.on('enviarMensaje', function(mensaje) {
            console.log(mensaje);
        });
