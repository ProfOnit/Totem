export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game",
        });
        this.secs = 60;
    }

    init() {

    }

    movementManager() {
        let x = this.dude.x;
        let y = this.dude.y;
        if (this.keyboard.Z.isDown)
            y -= 16;
        if (this.keyboard.S.isDown)
            y += 16;
        if (this.keyboard.Q.isDown)
            x -= 16;
        if (this.keyboard.D.isDown)
        x += 16;
        this.dude.x = x;
        this.dude.y = y;
    }

    preload() {

        this.load.image("tile", "./assets/tile.png");

        this.load.image("dude", "./assets/dude.png");

        this.load.tilemapCSV("map", "./assets/mapFin.csv");
    }

    create() {
        

        var map = this.make.tilemap({
            key: "map",
            tileWidth: 16,
            tileHeight: 16
        });
        var tileset = map.addTilesetImage("tile");
        var layer = map.createStaticLayer(0, tileset, 0, 0);
        map.setLayer(layer)

        this.keyboard = this.input.keyboard.addKeys("Z, Q, S, D");
        this.dude = this.physics.add.image(300, 100, "dude");

    }

    tick() {
        this.secs--;
        if (this.secs == 0) {
           this.movementManager();
           this.secs = 60;
        }
    }

    update() {
        var timer = this.time.addEvent({
            delay: 1000,
            callback: this.tick,
            callbackScope: this,
            loop: true
        });
    }
}