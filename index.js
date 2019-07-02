const express = require('express');
var socket = require('socket.io');

var app = express();

var server = app.listen(4000, ()=>{
    console.log("Listening on port 4000");
});

app.use(express.static('public'));

var io = socket(server);

io.on('connection', (socket)=>{
    console.log("Socket connection made");

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data);
    });

    socket.on('typing',(data)=>{
        socket.broadcast.emit('typing',data);
    });

});