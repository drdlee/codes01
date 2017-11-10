var express = require("express"),
    app     = express();
    
app.set("view engine","ejs");
app.use(express.static("public"));

app.get("/", function(req,res){
   res.render("index"); 
});

app.get("/foodie", function(req,res){
   res.render("foodie/foodie"); 
});

app.get("/whichcolor", function(req, res) {
   res.render("colorGame/colorGame");
});

app.get("/dougie", function(req, res) {
    res.render("dougie/dougie");
});

app.get("/pixi", function(req, res) {
    res.render("pixi/pixi");
});

app.get("/phaser", function(req, res) {
    res.render("phaser/index");
});

app.get("/phaser/slide-show-01", function(req, res) {
    res.render("phaser/index-01");
});

app.get("/phaser/petGame", function(req, res) {
    res.render("phaser/index-02");
});

app.get("/phaser/platformer01", function(req, res) {
    res.render("phaser/index-03");
});

app.get("/pixi/mario", function(req, res) {
    res.render("pixi/mario/superMario");
});

app.get("/phaser/dontCrush", function(req, res) {
    res.render("phaser/dontCrush");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("PORTFOLIO STARTED");
});