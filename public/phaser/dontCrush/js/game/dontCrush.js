
var DC = (function(){
   var ANGLE = 26.55;
   
   function DCgame(phaserGame){
      this.game = phaserGame;
      this.arrTiles = [];
   } 
   
   DCgame.prototype.generateRoad = function(){
      var sprite = this.game.add.sprite(0,0, 'tile_road_1');
      sprite.anchor.setTo(0.5);
      sprite.x = this.game.world.centerX;
      sprite.y = this.game.world.centerY;
      this.arrTiles.push(sprite);
   };
   DCgame.prototype.moveTiles = function(){
      var i = this.arrTiles.length -1;
      while (i>=0){
         var sprite = this.arrTiles[i];
         sprite.x -= Math.cos(ANGLE * Math.PI / 180);
         sprite.y += Math.sin(ANGLE * Math.PI / 180);
      }
   };
   
   DCgame.prototype.init = function(){
      this.game.stage.backgroundColor = '#9bd3e1';
   };
   
   DCgame.prototype.preload = function(){
      this.game.load.image('tile_road_1','/phaser/dontCrush/img/assets/tile_road_1.png');
   };
   
   DCgame.prototype.create = function(){
      this.generateRoad();
   };
   
   DCgame.prototype.update = function(){
      this.moveTiles();
   };
   
   return DCgame;
})();