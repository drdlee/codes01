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
})

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("PORTFOLIO STARTED");
});