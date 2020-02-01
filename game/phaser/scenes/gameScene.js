import { mapConfig } from '../../config'

export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game",
        });
    }

    init() {

    }

    movementManager() {
        let x = this.dude.x;
        let y = this.dude.y;
        if (this.keyboard.Z.isDown && this.dude.y - mapConfig.tileSize > 0)
            y -= mapConfig.tileSize;
        if (this.keyboard.S.isDown && this.dude.y + mapConfig.tileSize < mapConfig.tileSize * mapConfig.nbTileY)
            y += mapConfig.tileSize;
        if (this.keyboard.Q.isDown && this.dude.x - mapConfig.tileSize > 0)
            x -= mapConfig.tileSize;
        if (this.keyboard.D.isDown && this.dude.x + mapConfig.tileSize < mapConfig.tileSize * mapConfig.nbTileX)
            x += mapConfig.tileSize;
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
            tileWidth: mapConfig.tileSize,
            tileHeight: mapConfig.tileSize
        });
        var tileset = map.addTilesetImage("tile");
        var layer = map.createStaticLayer(0, tileset, 0, 0);
        map.setLayer(layer)

        this.keyboard = this.input.keyboard.addKeys("Z, Q, S, D");
        this.dude = this.physics.add.image(300, 100, "dude");

    }

    update() {
        this.movementManager();
    }
}