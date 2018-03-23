import io from 'socket.io-client';

export default class Client {
	constructor(game) {
		this.socket = io.connect('http://localhost:8081');
		
		this.socket.on('newplayer', (data) => {
			game.addNewPlayer(data.id, data.x, data.y);
		});

		this.socket.on('allplayers', (data) => {
			for (let i = 0; i < data.length; i++) {
				game.addNewPlayer(data[i].id, data[i].x, data[i].y);
			}
		});
	}

	getNewPlayer() {
		this.socket.emit('newplayer');
	}
}
