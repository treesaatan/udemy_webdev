// npm install express ejs --save 
let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

let campgrounds = [
    {name:"Salmon Creek", image:"https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name:"Salmon Creek", image:"https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
    {name:"Salmon Creek", image:"https://images.unsplash.com/photo-1537905569824-f89f14cceb68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"},
]

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

// make new campground
app.post("/campgrounds", function(req,res){
    // get data from form --> add to array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    // redirect to campgrounds
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("yelpcamp started");
});