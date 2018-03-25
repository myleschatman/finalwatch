export default class Game {
	constructor(app) {
		this.io = require('socket.io')(app);
		this.lastPlayerId = 0;
		this.io.on('connection', (socket) => {
			socket.on('newplayer', () => {
				socket.player = {
					id: this.lastPlayerId++,
					x: this.randomInt(100, 400),
					y: 996
				};
				socket.emit('allplayers', this.getAllPlayers());
				socket.broadcast.emit('newplayer', socket.player);

				socket.on('moveplayer', (direction) => {
					if (direction === 'left') {
						socket.player.x = -180;
					} else if (direction === 'right') {
						socket.player.x = 180;
					}
					this.io.emit('moveplayer', socket.player);
				});
			});
		});
	}

	getAllPlayers() {
		var players = [];
		var self = this;

		Object.keys(self.io.sockets.connected).forEach(function (socketID) {
			var player = self.io.sockets.connected[socketID].player;
			if (player) players.push(player);
		});
		return players;
	}

	randomInt(low, high) {
		return Math.floor(Math.random() * (high - low) + low);
	}
}