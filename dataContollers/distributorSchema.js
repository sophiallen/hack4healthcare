var mongoose = require('mongoose');
var Schema = mongoose.Schema;

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

module.exports = mongoose.model('Distributor', distributorSchema);  