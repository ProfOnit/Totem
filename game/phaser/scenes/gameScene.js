export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game",
        })
    }

    init() {

    }

    movementManager() {
        this.dude.setVelocity(0, 0)
        if (this.keyboard.Z.isDown)
            this.dude.setVelocity(0, -50)
        if (this.keyboard.S.isDown)
            this.dude.setVelocity(0, 50)
        if (this.keyboard.Q.isDown)
            this.dude.setVelocity(-50, 0)
        if (this.keyboard.D.isDown)
            this.dude.setVelocity(50, 0)
        if (this.keyboard.D.isDown && this.keyboard.S.isDown)
            this.dude.setVelocity(50, 50)
        if (this.keyboard.D.isDown && this.keyboard.Z.isDown)
            this.dude.setVelocity(50, -50)
        if (this.keyboard.Q.isDown && this.keyboard.S.isDown)
            this.dude.setVelocity(-50, 50)
        if (this.keyboard.Z.isDown && this.keyboard.Q.isDown)
            this.dude.setVelocity(-50, -50)
    }

    preload() {
        this.load.image("grass", "./assets/grass.jfif");
        this.load.image("dude", "./assets/dude.png");
    }

    create() {
        this.keyboard = this.input.keyboard.addKeys("Z, Q, S, D");
        this.add.image(0, 0, "grass").setOrigin(0);
        this.dude = this.physics.add.image(300, 100, "dude");
    }

    update() {
        this.movementManager();
    }
}