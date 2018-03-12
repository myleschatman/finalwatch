import io from 'socket.io-client';

export default class Client {
  constructor(game) {
    this.socket = io.connect('http://localhost:8081');

    this.socket.on('newplayer', (data) => {
      console.log(data);
      game.addNewPlayer(data.id, data.x, data.y);
    });
  }
  getNewPlayer() {
    this.socket.emit('newplayer');
  }
}