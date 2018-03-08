export default class Preload extends Phaser.State {
  constructor() {
    super();
  }

  preload() {
    this.asset = this.add.sprite(this.game.width / 2, this.game.height / 2, 'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.setPreloadSprite(this.asset);
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    this.loadResources();
  }

  update() {
    if (this.ready) {
      this.game.state.start('Game');
    }
  }

  loadResources() {
	  this.game.load.spritesheet('assassin', 'assets/sprites/assassin.png', 32, 32, 8);
    this.game.load.spritesheet('healer', 'assets/sprites/healer.png', 32, 32, 6);
	  this.game.load.spritesheet('warrior', 'assets/sprites/warrior.png', 32, 32, 8);
	  this.game.load.spritesheet('ranger', 'assets/sprites/ranger.png', 32, 32, 8);

  }

  onLoadComplete() {
    this.ready = true;
  }
}