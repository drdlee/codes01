var Game = {};

Game.boot = function(gamee){
    
};

Game.boot.prototype = {
    init: function(){
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true; // if a user get off on another screen/window, the game wont pause.
    },
    preload: function(){
        this.load.image('preloadBar','/phaser/assets/platformer01/preloadBar-739laod.gif');
    },
    create:function(){
        this.state.start('preloader');
    }
};