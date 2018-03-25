import Player from '../prefabs/player';
import Client from '../client/client';

export default class Game extends Phaser.State {
	constructor() {
		super();
		this.client = new Client(this);
	}
	
	init() {
		this.game.stage.disableVisibilityChange = true;
		this.playerMap = {};
	}
	
	preload() {
		
	}
	
	create() {
		this.client.getNewPlayer();

		this.cursors = this.game.input.keyboard.createCursorKeys();
		this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
	}
	
	update() {
		if (this.cursors.left.isDown) {
			this.client.movePlayer('left');
		} else if (this.cursors.right.isDown) {
			this.client.movePlayer('right');
		}
	}

	render() {
		this.game.debug.text(this.game.time.fps, 2, 14, '#00FF00');
	}
	
	addNewPlayer(id, x, y) {
		this.playerMap[id] = new Player(this.game, id, x, y);
		this.game.add.existing(this.playerMap[id]);
	}

	movePlayer(id, x, y) {
		this.playerMap[id].body.velocity.x = x;
		this.playerMap[id].body.velocity.y = y;
	}
}