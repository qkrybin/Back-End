/*** Socket.IO 추가 ***/
app.io = require('socket.io')();
 
app.io.on('connection', function(socket){
    
  console.log("a user connected");
  socket.broadcast.emit('hi');
    
  socket.on('disconnect', function(){
      console.log('user disconnected');
  });
    
  socket.on('chatMessage', function(msg){
      console.log('message: ' + msg);
      app.emit('chatMessage', msg);
  });
 
});

