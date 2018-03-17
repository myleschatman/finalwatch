import Player from '../prefabs/player';
import Client from '../client/client';

export default class Game extends Phaser.State {
	constructor() {
		super();
		this.client = new Client(this);
	}
	
	init() {
		this.game.stage.disableVisibilityChange = true;
	}
	
	preload() {
		
	}
	
	create() {
		this.playerMap = {};
		this.client.getNewPlayer();
	}
	
	update() {
		
	}
	
	addNewPlayer(id, x, y) {
		this.playerMap[id] = new Player(this.game, x, y);
		this.game.add.existing(this.playerMap[id]);
	}
}