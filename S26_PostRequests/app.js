let express = require("express");
let app = express();
// npm install body-parser --save
let bodyParser = require("body-parser");

// hard coded for now, will use databases later!! (-:
let friends = ["ethan", "dani", "raquel", "dillon", "matthew", "taylor"];

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
})

app.get("/friends", function(req,res){
    res.render("friends", {friends:friends});
})

app.post("/addfriend", function(req,res){
    let newFriend = req.body.newfriend;
    friends.push(newFriend);
    // go back to /friends page
    res.redirect("/friends");
})

app.listen(3000, function () {
    console.log("Server listening on port 3000");
  });
  