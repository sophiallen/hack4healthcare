var dataController = require('./../dataControllers/dataControllers.js');

module.exports = function(app){
	app.post('/api/create_dist', function(req, res){
		console.log('in api listener, heard: ' + req.body.org_name);
		dataController.createDist(req, res);
	});
	
	app.get('/api/get_all_distributors/:dists') , function(req, res){
		dataController.getAllDistributors(req.res);
	});
}