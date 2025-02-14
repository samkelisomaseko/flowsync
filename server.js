// server.js
const io = require('socket.io')(3000, {
    cors: {
      origin: "*"
    }
  });
  
  io.on('connection', socket => {
      console.log("connection");
    socket.on('offer', offer => {
      console.log("offer");
      socket.broadcast.emit('offer', offer);
    });
    socket.on('answer', answer => {
      console.log("answer");
      socket.broadcast.emit('answer', answer);
    });
  });