// http://jsonplaceholder.typicode.com/users/1

const axios = require('axios');



axios.get('https://jsonplaceholder.typicode.com/users/1')
  .then(function (response) {
    // handle success
    // eval(require('locus')) <-- this is for debugging! | npm i -D locus
    console.log(`${response.data.name} + ' lives in ' + ${response.data.address.city}`);
    // console.log(response.data.userId);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });