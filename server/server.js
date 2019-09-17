var express = require('express');
var app = express();
const cors = require('cors');

app.options('*', cors());
app.use(cors());

// server.js

// init project

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', cors(), function(request, response) {
	response.sendFile(__dirname + '/app/index.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
	console.log('Your app is listening on port ' + listener.address().port);
});
