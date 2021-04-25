// Example bot with list of all socket messages bots would be interested in

var io = require('socket.io-client');

var chat_room = '<enter room code>';
var bot_username = '<enter bot name>';

socket_url = 'wss://chathe.net';
var socket = io.connect(socket_url);

// sent when a user goes away
socket.on('away', function(msg){
  console.log(msg.username+' went away ('+msg.away+')');
});

// sent when a user returns from away
socket.on('back', function(msg){
  console.log(msg.username+' is back');
});

// sent when a user sends a command (such as a /me)
socket.on('chat command', function(msg){
  // identified with a unique msg.id
  console.log('<'+msg.username+'> '+msg.message);
});

// sent when a new chat message arrives
socket.on('chat message', function(msg){
  // identified with a unique msg.id
  console.log('<'+msg.username+'> '+msg.message);
});

// sent when successfully connected to socket
socket.on('connect', function() {
  newData = {
    username: bot_username,
    room: chat_room,
    version: <number> //version will change, make sure your script matches the current main.js
  };
  socket.emit('ehlo', newData);
  console.log(' -!- Connected');
});

// sent when a chat message is deleted
socket.on('delete message', function(msg){
  console.log(' -!- '+msg.id+' has been deleted');
});

// sent when bot is disconnected
socket.on('disconnect', function() {
  console.log(' -!- Disconnected');
});

// sent when an error occurs
socket.on('error', function(msg){
  console.log(' -!- '+msg);
});

// sent when a room is closed an no more posting allowed
socket.on('room closed', function(){
  console.log(' -!- Room Closed');
});

// sent when room is openned and posting is allowed
socket.on('room opened', function(){
  console.log(' -!- Room Opened');
});

// sent when a chat message is updated
socket.on('update message', function(msg
  // msg.id matches the one from the 'chat message' command
  console.log('<'+msg.username+'> '+msg.message);
});

// sent when a new user joins the room
socket.on('user join', function(msg){
  if (msg.username != bot_username) {
    console.log(' -!- '+msg.username+' joined');
  }
});

// sent when a user leaves the room
socket.on('user leave', function(msg){
  console.log(' -!- '+msg+' left');
});
