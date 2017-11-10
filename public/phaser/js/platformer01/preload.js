/*global Game*/

Game.preloader = function(){
    this.preloadBar = null;
};

Game.preloader.prototype = {
    preload:function(){
        this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY,'preloadBar');
        this.preloadBar.anchor.setTo(0.5);
        this.time.advancedTiming = true;
        this.load.setPreloadSprite(this.preloadBar);
        
        this.load.tilemap('map','/phaser/assets/platformer01/map01.csv');
        this.load.image('tileset','/phaser/assets/platformer01/tile02.png');
        this.load.image('bird','/phaser/assets/platformer01/bird.png');
        this.load.image('nut','/phaser/assets/platformer01/nut.png');
        
        this.load.spritesheet('player','/phaser/assets/platformer01/spritesheet01.png',24,26);
        this.load.spritesheet('button','/phaser/assets/platformer01/button_sprite_sheet.png',193,71);
    },
    create:function(){
        this.state.start('level1');
    }
};