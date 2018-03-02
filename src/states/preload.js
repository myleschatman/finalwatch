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
    this.game.load.spritesheet('gold_knight', 'assets/sprites/gold_knight_walk.png', 64, 64, 18);
  }

  onLoadComplete() {
    this.ready = true;
  }
}