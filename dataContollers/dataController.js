var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var keys = require('./../keys.js');

var connectionString = 'mongodb://' + keys.dbUserName + ':' + keys.dbPass + keys.dbUrl;
mongoose.connect(connectionString);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("successfully connected to mLab mongodb.");
});

// var languageSchema = new Schema({
// 	name: String,
// 	engine: String,
// 	users: {type: Number, default: 1}
// });

var requestSchema = new Schema({
	type: String,
	amount: {type: Number},
	dateCreated: {type: Date},
	distributor: String,
	urgency: {type: Number, default: 3},
	fulfilled: Boolean
});


var distributorSchema = new Schema({
	org_name: String,
	contactName: String,
	phone: String,
	email: String, 
	address: String,
	hours: String,
	created: Date,
	donationsRecieved: Array
});


//module.exports = mongoose.model('Language', languageSchema);  