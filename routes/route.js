var express = require('express');

var route = express.Router();

route.get('/header', function(req, res){
	var software = req.headers['user-agent'];	
	var ip = req.headers['x-forwarded-for'] ||
     req.connection.remoteAddress ||
     req.socket.remoteAddress ||
     req.connection.socket.remoteAddress;
	res.json({'ip' : ip, 'language' : (req.headers['accept-language']).split(',')[0], "software": software.substring(software.indexOf('(') + 1,software.indexOf(')')) });	
});

module.exports = route;