var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var mensajes = [];


app.use(express.static('public'));

app.get('/',function(req,resp){

        resp.status(200).send('ready');

});


io.on('connection',function(socket){

    //socket.emit('mensaje','saludos como estan');

    socket.on('nuevo_mensaje',function(data){

        
        mensajes.push(data);
        io.sockets.emit('mensajes_cliente',mensajes);
        

    });


   


});



server.listen(5000,function(){


    console.log("server corriendo en el puerto 5000");

})