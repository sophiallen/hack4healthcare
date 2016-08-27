var Distributor = require('./distributorSchema.js');
var DonationRequest = require('./requestSchema.js');


exports.createDist = function(req, res){
	var today = new Date();

	var entry = new Distributor({
		//id and users are auto-generated...
		orgName: req.body.org_name,
		contactName: req.body.contact_name,
		phone: req.body.phone,
		email: req.body.email,
		address: req.body.address,
		hours: req.body.hours,
		created: today.toLocaleDateString(),
		donationsRecieved: []
	});

	entry.save(function(err, entry){
		//Save feedback to session
		if (err){
			console.log('error in db');
			res.json({
				'type': 'info',
				'msg': 'An error occurred: unable to add distributor to our database.',
				'display': true
			});
		} else {
			console.log('db successful create');
			res.json({
				'type': 'success',
				'msg': 'Successfully added distributor to our list of languages',
				'display': true
			});
		}

	});
};
