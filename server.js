'use strict';

// var global
// var statics = require('node-static');
// var fileserver = new statics.Server("./public");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var fileUpload = require("express-fileupload");
var expressValidator = require('express-validator');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var path = require('path');
var Server = require("http").createServer(app);
var port = process.env.PORT || 5000;
//Import the mongoose module
var mongoose = require("mongoose");

// var specified
var route = require("./routes/route");

// process.env.PORT lets the port be set by Heroku

// app use global
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname + "/public")));
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cookieParser());
app.use(session({ resave: true, secret: 'asyu' , saveUninitialized: true}));

// sessi
app.use(function(req, res, next){
    // console.log(req.session.user);
    if (req.session.user != null) {
      res.locals.session = req.session.user;
      // console.log(res.locals.session);
      // console.log(req.session.user);
    } else {
      console.log("cuk");
    }
    return next();
});

// routes
app.use(route);



// koneksi
//Set up default mongoose connection
// var mongoDB = 'mongodb://pikodestyafandy:17agustus@#@#@cluster0-shard-00-00-y2iln.mongodb.net:27017,cluster0-shard-00-01-y2iln.mongodb.net:27017,cluster0-shard-00-02-y2iln.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
// mongoose.connect(mongoDB, {
//   useMongoClient: true
// });
// // Get Mongoose to use the global promise library
// mongoose.Promise = global.Promise;
// //Get the default connection
// var db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', function(){
//   console.log("MongoDB connection Success");
// })

Server.listen(port, function(){
  console.log("Jalan di Port "+port);
})
