const mongoose = require('mongoose'); // ODM object dta mapper; js layer on top of mongodb
mongoose.connect('mongodb://localhost:27017/cat_app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to DB!'))
.catch(error => console.log(error.message));

let catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

let Cat = mongoose.model("Cat", catSchema);

// add new cat to db
// let friend = new Cat({
//     name: "Friend",
//     age: 5,
//     temperament: "Chillin"
// });

// friend.save(function(err,cat) {
//     if(err){
//         console.log("something is wrong");
//     } else {
//         console.log("We saved a cat to db:" + cat);
//     }
// })

Cat.create({
    // new and save at the same time
    name: "Grant",
    age: 4,
    temperament: "Alright"
}, function(err, cat){
    if(err){
        console.log("err");
    } else {
        console.log(cat);
    }
});

// retrieve all cats from db and console.log them
Cat.find({}, function(err, cats) {
    if(err){
        console.log("error: " + err);
    } else {
        console.log("all the cats: " + cats);
    }
});
