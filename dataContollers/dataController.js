var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var keys = require('./../keys.js');

var connectionString = 'mongodb://' + keys.dbUserName + ':' + keys.dbPass + keys.dbUrl;
// mongoose.connect(connectionString);
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("successfully connected to mLab mongodb.");
// });

//var 