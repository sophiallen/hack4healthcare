var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
var keys = require('./keys.js');

var app = new express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('app'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', require('cors')());

var connectionString = 'mongodb://' + keys.dbUserName + ':' + keys.dbPass + keys.dbUrl;
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("successfully connected to mLab mongodb.");
});



var api = require('./routes/api.js')(app);
var routes = require('./routes/routes.js')(app);

app.listen(app.get('port'), function(){
	console.log('express server started');
});