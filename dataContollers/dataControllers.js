var Distributor = require('./distributorSchema.js');
var DonationRequest = require('./requestSchema.js');


exports.createDist = function(req, res){

	var entry = new Distributor({
		//id and users are auto-generated...
		orgName: req.body.org_name.toLowerCase(),
		contactName: req.body.contact_name,
		phone: req.body.phone,
		email: req.body.email,
		address: req.body.address,
		hours: req.body.hours,
		created: 
	});

	/*

	org_name: String,
	contactName: String,
	phone: String,
	email: String, 
	address: String,
	hours: String,
	created: Date,
	donationsRecieved: Array
	*/

	entry.save(function(err, entry){
		//Save feedback to session
		if (err){
			res.json({
				'type': 'info',
				'msg': 'An error occurred: unable to add ' + capitalize(entry.name) + 'to our database.',
				'display': true
			});
		} else {
			res.json({
				'type': 'success',
				'msg': 'Successfully added ' + capitalize(entry.name) + ' to our list of languages',
				'display': true
			});
		}

	});
};
