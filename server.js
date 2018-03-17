import express from 'express';
import http from 'http';
import Game from './src/server/game.js';

const app = express();
const server = http.Server(app);

app.use('/assets', express.static(__dirname + '/build/assets'));
app.use('/styles', express.static(__dirname + '/build/styles'));
app.use('/scripts', express.static(__dirname + '/build/scripts'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/build/index.html');
});

server.listen(8081, () => {
	console.log('Listening on ' + server.address().port);
});

let game = new Game(server);