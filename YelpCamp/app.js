// npm install express ejs --save 
let express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

// create yelp_app database with additional items to take care of warnings
mongoose.connect('mongodb://localhost:27017/yelp_app', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// SCHEMA SETUP
let campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

// turn Schema into a method
let Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name:"Alapark", 
//         image:"https://www.alapark.com/sites/default/files/styles/default/public/2019-04/CCC%20Primitive%20camping.jpeg?itok=_6Gwos6W"
//     }, function(err, campground){
//         if(err){
//             console.log(err);
//         } else {
//             console.log("Newly created campground: " + campground);
//         }
//     }   
// );

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    // Get campgrounds from db
    Campground.find({}, function(err,allCampgrounds){
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds:allCampgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds:campgrounds});
});

// make new campground
app.post("/campgrounds", function(req,res){
    // get data from form --> add to array
    let name = req.body.name;
    let image = req.body.image;
    let newCampground = {name:name, image:image};
    // create new campground and send to the db
    Campground.create(newCampground, function(err, newlyCreated){
        if(err) {
            console.log(err);
        } else {
            // redirect to campgrounds
            res.redirect("/campgrounds");
        }
    })
});

app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

app.listen(3000, function(){
    console.log("yelpcamp started");
});