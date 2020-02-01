import { mapConfig, frameRatePlayerAnimation } from '../../config'

export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game",
        });
    }

    animation() {
        this.anims.create({
            key: 'down',
            frameRate: frameRatePlayerAnimation,
            frames: this.anims.generateFrameNames('player', {start: 0, end: 3})
        });
        this.anims.create({
            key: 'right',
            frameRate: frameRatePlayerAnimation,
            frames: this.anims.generateFrameNames('player', {start: 4, end: 7})
        });
        this.anims.create({
            key: 'left',
            frameRate: frameRatePlayerAnimation,
            frames: this.anims.generateFrameNames('player', {start: 8, end: 11})
        });
        this.anims.create({
            key: 'up',
            frameRate: frameRatePlayerAnimation,
            frames: this.anims.generateFrameNames('player', {start: 12, end: 16})
        });
    }

    movementManager() {
        let x = this.player.x;
        let y = this.player.y;
        if (this.keyboard.Z.isDown && this.player.y - (mapConfig.tileSize * 2) > 0) {
            y -= mapConfig.tileSize;
            this.player.play("up");
        }
        if (this.keyboard.S.isDown && this.player.y + (mapConfig.tileSize * 2) < mapConfig.tileSize * mapConfig.nbTileY) {
            y += mapConfig.tileSize;
            this.player.play("down");
        }
        if (this.keyboard.Q.isDown && this.player.x - (mapConfig.tileSize * 2) > 0) {
            x -= mapConfig.tileSize;
            this.player.play("left");
        }
        if (this.keyboard.D.isDown && this.player.x + mapConfig.tileSize < mapConfig.tileSize * mapConfig.nbTileX) {
            this.player.play("right");
            x += mapConfig.tileSize;
        }
        this.player.x = x;
        this.player.y = y;
    }

    preload() {
        this.scale.resize(1920, 1080);
        this.load.image("tile", "./assets/plateform.png");
        this.load.image("background", "./assets/canyon-background.png");
        //this.load.image("plateform", "./assets/plateform.png");
        this.load.spritesheet("player", "./assets/player.png", {frameWidth: 32, frameHeight: 64});
        this.load.tilemapCSV("map", "./assets/mapFin.csv");
        // this.scale.startFullscreen();
    }

    create() {
        var map = this.make.tilemap({
            key: "map",
            tileWidth: mapConfig.tileSize,
            tileHeight: mapConfig.tileSize
        });
        var tileset = map.addTilesetImage("tile");
        this.add.image(1920 / 2, 1080 / 2, "background");
        //this.add.image(100, 100, "plateform");
        var layer = map.createStaticLayer(0, tileset, 0, 0);
        this.keyboard = this.input.keyboard.addKeys("Z, Q, S, D");
        this.player = this.add.sprite(100, 100, "player", 0);
        this.animation();
    }

    update() {
        this.movementManager();
    }
}