// npm install express ejs --save 
let express = require("express");
let app = express();
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.semd("ha");
});

app.get("/campgrounds", function(req,res){
    let campgrounds = [
        {name:"Salmon Creek", img:""},
        {name:"Salmon Creek", img:""},
        {name:"Salmon Creek", img:""}
    ]
});

app.listen(3000, function(){
    console.log("yelpcamp started");
});