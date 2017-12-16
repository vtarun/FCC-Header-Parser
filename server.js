var express = require('express');
var bodyParser = require('body-parser');
var api = require('./routes/route');
var port = 3000;
var app = express();

app.use(express.static(__dirname + '/'));

app.use('/api', api);


app.listen(port, function(){
	console.log("listening to port "+ port);
})