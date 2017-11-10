/*global PIXI*/

var renderer = PIXI.autoDetectRenderer(640, 360, {antialias: false, transparent: false, resolution: 1}),
    stage = new PIXI.Container();
document.body.appendChild(renderer.view);
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

PIXI.loader
  .add([{name: "cat", url:"/pixi/assets/cat.png"},
  {url:"/pixi/assets/09.png"},
  {name: "character", url:"/pixi/assets/characters.png"},
  {name: "thief", url:"/pixi/assets/jump.json"}])
  .on("progress", loadProgressHandler)
  .load(setup);

function loadProgressHandler(loader, resource){

}

var sprite,
    char,
    thief,
    state;

function setup(){
  sprite = new PIXI.Sprite(PIXI.loader.resources["cat"].texture);
  sprite.position.set(100,160);
  sprite.scale.set(0.5);
  // sprite.anchor.set(0.5);
  sprite.pivot.set(32,32);
  sprite.rotation = 0.5;
  stage.addChild(sprite);
  
  sprite.vx = 0;
  sprite.vy = 0;
  
  var rect = new PIXI.Rectangle(144,0, 16,16);
  var texture = PIXI.loader.resources['character'].texture;
  texture.frame = rect;
  char = new PIXI.Sprite(texture);
  char.scale.set(3);
  stage.addChild(char);
  
  thief = new PIXI.Sprite(PIXI.loader.resources["thief"].textures["j_000.png"]);
  stage.addChild(thief);
  thief.position.set(300, 100);
  
  state = play;
  gameloop();
}

function gameloop(){
  
  requestAnimationFrame(gameloop);
  
  state();
  
  renderer.render(stage);
}

function play(){
  sprite.vx = 1;
  sprite.vy = 1;
  
  sprite.x += sprite.vx;
  sprite.y += sprite.vy;
}
// var Container           = PIXI.Container,
//     autoDetectRenderer  = PIXI.autoDetectRenderer,
//     loader              = PIXI.loader,
//     resources           = PIXI.loader.resources,
//     sprite              = PIXI.Sprite,
//     TextureCache        = PIXI.utils.TextureCache;
    
// var stage     = new Container,
//     renderer  = autoDetectRenderer(640,360);
// document.body.appendChild(renderer.view);

// loader
//   .add("catImage","/pixi/assets/cat.png")
//   .load(setup);
  
// function setup(){
//   var cat = new sprite(resources.catImage.texture);
//   stage.addChild(cat);
//   renderer.render(stage);
// }