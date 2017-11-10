/*global Phaser*/
/*global DC*/

var GAME_WIDTH = 480;
var GAME_HEIGHT = 640;

var state = {
    init: init,
    preload: preload,
    update: update,
    create: create
};

var phaserGame = new Phaser.Game(
    GAME_WIDTH,
    GAME_HEIGHT,
    Phaser.AUTO,
    'container',
    state
);

var DCyo = new DC(phaserGame);

function init(){
    DCyo.init();
}
function create(){
    DCyo.create();
}
function preload(){
    DCyo.preload();
}
function update(){
    DCyo.update();
}