// Example bot that auto-greets people when they join

var io = require('socket.io-client');

var chat_room = '<enter room code>';
var bot_username = '<enter bot name>';

socket_url = 'wss://chat-png1408.rhcloud.com:8443';
var socket = io.connect(socket_url);

socket.on('connect', function() {
  newData = {
    username: bot_username,
    room: chat_room,
    version: <number> //version will change, make sure your script matches the current main.js
  };
  socket.emit('ehlo', newData);
  console.log(' -!- Connected');
});

socket.on('disconnect', function() {
  console.log(' -!- Disconnected');
});

socket.on('user join', function(msg){
  if (msg.username != bot_username) {
    messageData = {
      message: 'Welcome '+msg.username,
      username: bot_username,
      room: chat_room
    };
    socket.emit('chat message', messageData);
  }
});
