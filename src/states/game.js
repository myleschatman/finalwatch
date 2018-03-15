export default class Game extends Phaser.State {
	constructor() {
		super();
	}
	
	preload() {
		
	}
	
	create() {
		this.assassin = new Player(this.game, x, y);
		this.game.add.existing(this.assassin);
	}
	
	update() {
		
	}
}