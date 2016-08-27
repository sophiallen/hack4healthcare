var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var requestSchema = new Schema({
	type: String,
	amount: {type: Number},
	dateCreated: {type: Date},
	distributor: String,
	urgency: {type: Number, default: 3},
	fulfilled: Boolean
});


module.exports = mongoose.model('DonationRequest', requestSchema);  