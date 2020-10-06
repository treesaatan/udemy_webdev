# Steps taken to create this app

### npm init
* Entry point is app.js
* Makes the package.json

### npm install express mongoose body-parser --save
* Express
* Mongoose
* Body Parser - how we get data out of the form

### make your app.js file and add:
` let bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    express = require("express"),
    app = express();'