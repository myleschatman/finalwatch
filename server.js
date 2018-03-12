const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io').listen(server);

app.use('/assets', express.static(__dirname + '/build/assets'));
app.use('/styles', express.static(__dirname + '/build/styles'));
app.use('/scripts', express.static(__dirname + '/build/scripts'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

server.listen(8081, () => {
  console.log('Listening on ' + server.address().port);
});