var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

var app = new express();

app.set('port', process.env.PORT || 3000);
app.use(express.static('app'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/api', require('cors')());


var api = require('./routes/api.js');
var routes = require('./routes/routes.js');

app.listen(app.get('port'), function(){
	console.log('express server started');
});