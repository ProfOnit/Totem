import { mapConfig, frameRatePlayerAnimation } from '../../config'
var map;
export class gameScene extends Phaser.Scene {
    constructor() {
        super({
            key: "Game",
        });
        this.map = null;
        this.secs = 1;
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
        if (this.keyboard.Z.isDown && this.player.y - mapConfig.tileSizeY  > -mapConfig.tileSizeY &&
            map.layers[0].data[Math.round(this.player.y / mapConfig.tileSizeY - 0.69)][(Math.round(this.player.x / mapConfig.tileSizeX - 0.69))].index != -1) {
            //console.log();
            y -= mapConfig.tileSizeY;
            this.player.play("up");
        }
        if (this.keyboard.S.isDown && this.player.y + mapConfig.tileSizeY < mapConfig.tileSizeY * mapConfig.nbTileY &&
            map.layers[0].data[(Math.round(this.player.y / mapConfig.tileSizeY - 0.69) + 2)][(Math.round(this.player.x / mapConfig.tileSizeX - 0.69))].index != -1) {
            y += mapConfig.tileSizeY;
            this.player.play("down");
        }
        if (this.keyboard.Q.isDown && this.player.x - mapConfig.tileSizeX > 0 &&
            map.layers[0].data[(Math.round(this.player.y / mapConfig.tileSizeY - 0.69) + 1)][(Math.round(this.player.x / mapConfig.tileSizeX - 0.69) - 1)].index != -1) {
            x -= mapConfig.tileSizeX;
            this.player.play("left");
        }
        if (this.keyboard.D.isDown && this.player.x + mapConfig.tileSizeX < mapConfig.tileSizeX * mapConfig.nbTileX &&
            map.layers[0].data[Math.round(this.player.y / mapConfig.tileSizeY - 0.69) + 1][Math.round(this.player.x / mapConfig.tileSizeX - 0.69) + 1].index != -1) {
            this.player.play("right");
            x += mapConfig.tileSizeX;
        }
        this.player.x = x;
        this.player.y = y;
    }

    preload() {
        this.scale.resize(1920, 1080);
        this.load.image("plateform-64-46", "./assets/plateform-64-46.png");
        this.load.image("background", "./assets/canyon-background.png");
        this.load.spritesheet("player", "./assets/player.png", {frameWidth: 32, frameHeight: 64});
        this.load.tilemapCSV("map", "./assets/good.csv");
    }

    create() {
        map = this.make.tilemap({
            key: "map",
            tileWidth: mapConfig.tileSizeX,
            tileHeight: mapConfig.tileSizeY
        });
        console.log(map.layers[0].data)
        var tileset = map.addTilesetImage("plateform-64-46", "plateform-64-46");
        this.add.image(1920 / 2, 1080 / 2, "background");
        map.createStaticLayer(0, tileset, 0, 0);
        this.keyboard = this.input.keyboard.addKeys("Z, Q, S, D");
        this.player = this.add.sprite(100, 100, "player", 0);
        this.player.x = 32;
        this.player.y = 32;
        this.animation();
    }

    thick() {
        if (this.secs == 0) {
            this.secs = 15;
            this.movementManager();
        }
        this.secs--;
    }

    update() {
        var timer = this.time.addEvent({
            delay: 1000,                // ms
            callback: this.thick(),
            callbackScope: this,
            loop: true
        });
    }
}