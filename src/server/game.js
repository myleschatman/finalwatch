export default class Game {
	constructor(app) {
		this.io = require('socket.io')(app);
		this.lastPlayerId = 0;
				this.io.on('connection', (socket) => {
			socket.on('newplayer', () => {
				socket.player = {
					id: this.lastPlayerId++,
					x: this.randomInt(100, 400),
					y: this.randomInt(100, 400)
				};
				socket.emit('allplayers', this.getAllPlayers());
				socket.broadcast.emit('newplayer', socket.player);
			})
		})
	}

	getAllPlayers() {
		var players = []
		var self = this
		Object.keys(self.io.sockets.connected).forEach(function (socketID) {
				var player = self.io.sockets.connected[socketID].player;
				if (player) players.push(player);
		});
		console.log(players);
		return players;
	}

	randomInt(low, high) {
		return Math.floor(Math.random() * (high - low) + low);
	}
}