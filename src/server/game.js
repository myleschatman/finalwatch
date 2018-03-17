class Game {
	constructor(app) {
		this.lastPlayerId = 0;
		this.io = require('socket.io')(app);
		this.io.on('connection', (socket) => {
			socket.on('newplayer', () => {
				socket.player = {
					id: server.lastPlayerId++,
					x: 0,
					y: 0
				};
				socket.emit('newplayer', socket.player);
			});
		});
	}
}