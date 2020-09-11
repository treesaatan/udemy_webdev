// make a request from node 
// canuse request (not updated anymore) or axios (not covered here, but still updated)
// gone over here https://www.youtube.com/watch?v=UKoicp3Mxzk&ab_channel=IanSchoonover


const axios = require('axios');

// promised based package
// Make a request for a user with a given ID
// method chain
// .finally is always run ... it's just .then now??? CSE183 what
axios.get('https://jsonplaceholder.typicode.com/todos/1')
  .then(function (response) {
    // handle success
    console.log(response.data.title);
    console.log(response.data.userId);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

// if we were using express too // didn't work youtube man, check out S27_MovieAPI
app.get('/', async (req,res,next) => {
    try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    } catch(err) {
        console.log(err);
    }
});