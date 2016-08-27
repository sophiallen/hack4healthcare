var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var distributorSchema = new Schema({
	orgName: String,
	userType: String,
	contactFirstName: String,
	contactLastName: String,
	phone: String,
	email: String, 
	address: String,
	city: String,
	state: String,
	zip: String,
	hours: String,
	created: String,
	donationsRecieved: Array
});

module.exports = mongoose.model('Distributor', distributorSchema);  