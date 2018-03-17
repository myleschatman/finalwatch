export default class Game {
	constructor(app) {
		this.io = require('socket.io')(app);

		this.lastPlayerId = 0;
		this.io.on('connection', (socket) => {
			socket.on('newplayer', () => {
				socket.player = {
					id: this.lastPlayerId++,
					x: 0,
					y: 0
				};
				socket.emit('newplayer', socket.player);
			});
		});
	}
}