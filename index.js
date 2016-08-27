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



var api = require('./routes/api.js');
//var routes = require('./routes/routes.js'); buggy... :P

app.get('/', function(req, res){
		res.type('text/html');
		var options = {root: __dirname + '/app/views'};
		res.sendFile('index.html', options);
});

//handle 404 errors
app.use(function(req, res){
	res.type('text/plain');
	res.status(404).send('404: file not found');
});

app.listen(app.get('port'), function(){
	console.log('express server started');
});