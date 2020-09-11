// General search: http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb 

// Search with Movie ID: http://www.omdbapi.com/?i=tt3896198&apikey=thewdb 

// So everything is exactly the same as Colt explains in the following videos, 
// except you must append &apikey=thewdb to the end of your url.

// In your code, using string concatenation, that will look like this:
// "http://www.omdbapi.com/?s=" + query + "&apikey=thewdb"

// Or, with a more modern approach, using a template literal:
// `http://www.omdbapi.com/?s=${query}&apikey=thewdb`

let express = require('express');
var app = express();
const axios = require('axios');

// npm install ejs
app.set("view engine", "ejs");

app.get("/", function(req,res) {
    res.render("search");
})

// THIS ONE WORKKKKSSSS (-:
app.get("/results", (req, res, next) => {
    let query = req.query.search;
    let url = "http://www.omdbapi.com/?s=" +query+ "&apikey=thewdb";
    axios.get(url)
      .then(response => {
            var thedata = response.data
            console.log(thedata)
        //   res.send(thedata["Search"][0]["Title"])
            res.render("results", {thedata:thedata});
      })
      .catch(err => next(err));
  })

// app.get('/results', function(req,res) {
//     axios.get('http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb')
//     .then(function (response) {
//         // handle success
//         console.log(response); // doesnt give what is expected...
//         // res.send(response.data.Title);
//     })
//     .catch(function (error) {
//         // handle error
//         console.log("we are here");
//         console.log(error);
//     })
//     .then(function () {
//         // always executed
//     });
// })

app.listen(3000, function () {
    console.log("Movie App Started");
  });
  