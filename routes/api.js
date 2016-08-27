var dataController = require('./../dataControllers/dataControllers.js');

module.exports = function(app){
	app.post('/api/create_dist', function(req, res){
		console.log('in api listener, heard: ' + req.body.org_name);
		dataController.createDist(req, res);
	});
	
	app.post('/api/create_request', function(req, res){
		dataController.createRequest(req, res);
	});
	
	app.get('/api/get_all_dists', function(req, res){
		dataController.getAllDists(req, res);
	});
	
	app.get('/api/get_all_suppliers', function(req, res){
		dataController.getAllSuppliers(req, res);
	});
	
	app.get('/api/get_all_requests', function(req, res){
		dataController.getAllRequests(req, res);
	});
		
/* 	app.post('/api/remove_dist', function(req, res){ 
		dataController.removeDist(req, res); 
	})
	
	app.post('/api/remove_supplier', function(req, res){ 
		dataController.deleteSupplier(req, res); 
	})
	
	app.post('/api/delete_request', function(req, res){
		dataController.deleteRequest(req, res);
	}); */
}