var dataController = require('./../dataControllers/dataControllers.js');

module.exports = function(app){
	app.post('/api/create_dist', function(req, res){
		dataController.createDist(req, res);
	});
}