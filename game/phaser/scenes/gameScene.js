export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game",
        })
    }

    init() {

    }

    preload() {
        this.load.image("grass", "./assets/grass.jfif");
        this.load.image("dude", "./assets/dude.png");
    }

    create() {
        this.add.image(0, 0, "grass").setOrigin(0);
        console.log(this);
        this.game.physics.add.image(300, 100, "dude");
    }
}