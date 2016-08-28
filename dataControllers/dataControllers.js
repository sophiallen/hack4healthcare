var Distributor = require('./distributorSchema.js');
var DonationRequest = require('./requestSchema.js');


exports.createDist = function(req, res){
	console.log('in datacontroller, heard: ' + req.body.org_name);

	var today = new Date();

	var entry = new Distributor({
		//id and users are auto-generated...
		orgName: req.body.org_name,
		userType: req.body.user_type,
		first_name: req.body.first_name,
		last_name: req.body.last_name,
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
				'msg': 'Successfully added distributor to our database',
				'display': true
			});
		}

	});
};

exports.createRequest = function(req, res){
	var today = new Date();
	var entry = new DonationRequest({
		type: req.body.donation_type,
		amount: req.body.amount,
		dateCreated: today.toLocaleDateString(),
		distributor: req.body.dist_name,
		urgency: req.body.urgency,
		fulfilled: false
	});

	entry.save(function(err, entry){
		//Save feedback to session
		if (err){
			console.log('error in db');
			res.json({
				'type': 'info',
				'msg': 'An error occurred: unable to add request to our database.',
				'display': true
			});
		} else {
			console.log('db successful create');
			res.json({
				'type': 'success',
				'msg': 'Successfully added request to our list of database',
				'display': true
			});
		}

	});
}

exports.getAllDists = function(req, res){
		Distributor.find({userType: 'distributor'}, '-_id -__v', function(err, results){
		if (err){
			res.status(500).send('Error: a database error occurred.');
		} else {
			res.json(results);
		}
	});
}

exports.getAllSuppliers = function(req, res){
	Distributor.find({userType: 'supplier'}, '-_id -__v', function(err, results){
		if (err){
			res.status(500).send('Error: could not get suppliers');
		} else {
			res.json(results);
		}
	})
}

exports.getAllRequests = function(req, res){
	Distributor.find({userType: 'supplier'}, '-_id -__v', function(err, results){
		if (err){
			res.status(500).send('Error: could not get requests');
		} else {
			res.json(results);
		}
	})
}

