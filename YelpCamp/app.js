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
    image: String,
    description: String
});

// turn Schema into a method
let Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name:"Alapark", 
//         image:"https://www.alapark.com/sites/default/files/styles/default/public/2019-04/CCC%20Primitive%20camping.jpeg?itok=_6Gwos6W",
//         description: "This is a fantastic place to go camping. There are wonderful hiking trails nearby and eye-catching scenery."
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

// INDEX - show all campgrounds
app.get("/campgrounds", function(req,res){
    // Get campgrounds from db
    Campground.find({}, function(err,allCampgrounds){
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds:campgrounds});
});

// CREATE - add new campground to db
app.post("/campgrounds", function(req,res){
    // get data from form --> add to array
    let name = req.body.name;
    let image = req.body.image;
    let desc = req.body.description;
    let newCampground = {name:name, image:image, description:desc};
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

// NEW - show form to create new campground
app.get("/campgrounds/new", function(req,res){
    res.render("new");
});

// SHOW - shows more info about one campground || :id = anything
app.get("/campgrounds/:id", function(req,res){
    // find campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        }else {
            // render show template with the campground
            res.render("show", {campground:foundCampground});
        }
    });
 });

app.listen(3000, function(){
    console.log("yelpcamp started");
});
