/*global Phaser*/


var gameState = {
   array: function DCgame(phaserGame){
      this.arrTiles = [];
   },
   
   init: function(){
      this.stage.backgroundColor = '#9bd3e1';
   },
   preload: function(){
      this.load.image('tile_road_1','/phaser/dontCrush/img/assets/tile_road_1.png');
   },
   create: function(){
      this.genarateRoad();
   },
   update: function(){
      
   },
   genarateRoad: function(){
      var sprite = this.game.add.sprite(0,0, 'tile_road_1');
      sprite.anchor.setTo(0.5);
      sprite.x = this.game.world.centerX;
      sprite.y = this.game.world.centerY;
      this.arrTiles.push(sprite);
   }
};

var dontCrush = new Phaser.Game(480, 640, Phaser.AUTO);

dontCrush.state.add('gameState', gameState);
dontCrush.state.start('gameState');