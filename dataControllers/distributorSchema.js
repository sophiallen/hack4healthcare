var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var distributorSchema = new Schema({
	orgName: String,
	contactName: String,
	phone: String,
	email: String, 
	address: String,
	hours: String,
	created: String,
	donationsRecieved: Array
});

module.exports = mongoose.model('Distributor', distributorSchema);  