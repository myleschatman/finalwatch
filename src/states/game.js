import Player from '../prefabs/player';

export default class Game extends Phaser.State {
	constructor() {
		super();
	}
	
	preload() {
		
	}
	
	create() {
		this.assassin = new Player(this.game, 0, 0);
		this.game.add.existing(this.assassin);
	}
	
	update() {
		
	}
}