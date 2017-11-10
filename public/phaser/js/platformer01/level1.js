/*global Phaser, Game*/
EnemyBird = function(index, game, x, y){
    this.bird = game.add.sprite(x,y,'bird');
    this.bird.anchor.setTo(0.5);
    this.bird.name = index.toString();
    game.physics.enable(this.bird, Phaser.Physics.ARCADE);
    this.bird.body.immovable = true;
    this.bird.body.collideWorldBounds = true;
    this.bird.body.allowGravity = false;
    
    this.birdTween = game.add.tween(this.bird).to ({y: this.bird.y + 25}, 2000, 'Linear',true,0,100, true);
};

Game.level1 = function(gamea){};

var map;
var layer;
var player;
var controls = {};
var playerSpeed = 150;
var jumpTimer = 0;
var button;
var enemy1;
var shootTime = 0;
var nuts;

Game.level1.prototype = {
    create:function(gamew){
        this.stage.backgroundColor = '#353942';
        this.physics.arcade.gravity.y = 1400;
        
        map = this.add.tilemap('map',64,64);
        map.addTilesetImage('tileset');
        map.setCollisionBetween(0,3);
        layer = map.createLayer(0);
        layer.resizeWorld();
        map.setTileIndexCallback(5, this.resetPlayer, this);
        map.setTileIndexCallback(6, this.addCoin, this);
        
        
        player = this.add.sprite(100,502,'player');
        player.anchor.setTo(0.5);
        
        player.animations.add('idle',[0,1], 1, true);
        player.animations.add('jump',[2], 1, true);
        player.animations.add('run',[3,4,5,6,7,8], 7, true);
        
        this.physics.arcade.enable(player);
        this.camera.follow(player);
        player.body.collideWorldBounds = true;
        
        controls = {
            right: this.input.keyboard.addKey(Phaser.Keyboard.D),
            left: this.input.keyboard.addKey(Phaser.Keyboard.A),
            up: this.input.keyboard.addKey(Phaser.Keyboard.UP),
            shoot: this.input.keyboard.addKey(Phaser.Keyboard.W)
        };
        
        button = this.add.button(this.world.centerX - 95, this.world.centerY + 200, 'button', function(){
            console.log('button pressed');
        }, this, 2,1,0);
        button.fixedToCamera = true;
        
        enemy1 = new EnemyBird(0, gamew, player.x + 400, player.y - 100);
        
        nuts = gamew.add.group();
        nuts.enableBody = true;
        nuts.physicsBodyType = Phaser.Physics.ARCADE;
        // nuts.createMultiple(5,'nut');
        
        
        nuts.setAll('anchor',0.5);
        nuts.setAll('scale',0.5);
        nuts.setAll('outOfBoundsKill',true);
        nuts.setAll('checkWolrdBounds',true);
    },
    update:function(){
        this.physics.arcade.collide(player, layer);
        this.physics.arcade.collide(player, enemy1.bird,this.resetPlayer);
        player.body.velocity.x = 0;
        
        if(controls.right.isDown){
            player.animations.play('run');
            player.scale.setTo(1,1);
            player.body.velocity.x += playerSpeed;
        }
        
        if(controls.left.isDown){
            player.animations.play('run');
            player.scale.setTo(-1,1);
            player.body.velocity.x -= playerSpeed;
        }
        
        if(controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer){
            player.body.velocity.y = -600;
            jumpTimer = this.time.now + 750;
            player.animations.play('jump');
            console.log(this.time.now);
            console.log(jumpTimer);
        }
        
        if(player.body.velocity.x == 0 && player.body.velocity.y == 0){
            player.animations.play('idle');
        }

        
        if(controls.shoot.isDown){
            this.shootNut();
            console.log('shoot control pressed');
        }
        
        if(checkOverlap(nuts, enemy1.bird)){
            enemy1.bird.kill();
            console.log('bird killed');
        }
    },
    resetPlayer: function(){
        player.reset(100, 502);
    },
    addCoin: function(){
        map.putTile(-1,layer.getTileX(player.x), layer.getTileY(player.y));
        console.log(layer.getTileX(player.x));
    },
    shootNut: function(){
        if(this.time.now > shootTime){
            var nut = nuts.getFirstExists(false);
            if(nut){
                nut.reset(player.x, player.y);
                nut.body.velocity.y = -600;
                shootTime = this.time.not + 600;
                console.log('shoot!');
            }
        }
    }
};

function checkOverlap(spriteA, spriteB){
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();
        
        return Phaser.Rectangle.intersects(boundsA,boundsB);
}