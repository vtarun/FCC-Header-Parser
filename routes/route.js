var express = require('express');

var route = express.Router();

route.get('/header', function(req, res){
	var software = req.headers['user-agent'];
	//res.send(req.headers);
	res.json({'ip' : req.connection.remoteAddress, 'language' : (req.headers['accept-language']).split(',')[0], "software": software.substring(software.indexOf('(') + 1,software.indexOf(')')) });	
});

module.exports = route;