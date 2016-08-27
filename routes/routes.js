module.exports = function(app){
	app.get('/', function(req, res){
		res.type('text/html');
		var options = {root: __dirname + '/../app'};
		res.sendFile('index.html', options);
	});

	//handle 404 errors
	app.use(function(req, res){
		res.type('text/plain');
		res.status(404).send('404: file not found');
	});
}