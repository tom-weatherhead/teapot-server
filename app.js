﻿// teapot-server/app.js

// An HTTP teapot server.
// Tom Weatherhead - August 12, 2017

// require('rootpath')();
const express = require('express');
const path = require('path');

const app = express();

// **** Cross-Origin Resource Sharing: Begin ****

// See https://en.wikipedia.org/wiki/Cross-origin_resource_sharing
// See https://enable-cors.org/server_expressjs.html

// General:

// If we uncomment the block below, Mocha will complain that "the header contains invalid characters".

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
// 	next();
// });

// Minimal:

// app.use(function(req, res, next) {
// 	res.header("Access-Control-Allow-Origin", "null");
// 	res.header("GET");
// 	next();
// });

// **** Cross-Origin Resource Sharing: End ****

// app.use(express.static('public'));

// **** Request Event Handlers: Begin ****

app.get('/', function (req, res) {
	console.log('GET / : Sending the file index.html');
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/json', function (req, res) {
	var result = {
		message: 'GitHub!',
		number: 343
	};

	console.log('GET /json : Responding with JSON result:', result);
	res.json(result);
});

app.get('/notfound', function (req, res) {
	console.error('GET /notfound : Responding with HTTP status code 404 : Not found.');
	res.status(404).send('Boom; HTTP status code code 404 : Not found.');
});

app.get('/servererror', function (req, res) {
	console.error('GET /servererror : Responding with HTTP status code 500 : Internal server error.');
	// res.status(500).send('Boom; HTTP status code code 500 : Internal server error.');
	res.status(500).send('Boom.');
});

app.get('/teapot', function (req, res) {
	// See https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
	// See https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol
	// See https://httpstatuses.com/418
	// See https://stackoverflow.com/questions/24018008/is-there-a-server-that-implements-http-status-code-418
	// See especially https://www.google.com/teapot
	console.log('GET /teapot : Responding with HTTP status code 418 : I\'m a teapot.');
	// res.sendStatus(418);
	// Or res.status(418).send('The teapot is responding to the request to brew coffee...');
	res.status(418).sendFile(path.join(__dirname, 'teapot.html'));
});

app.get('/images/teapot.jpg', function (req, res) {
	res.sendFile(path.join(__dirname, 'public', 'images', 'teapot.jpg'));
});

// app.get('/jquery.slim.min.js', function (req, res) {
//	res.redirect('https://code.jquery.com/jquery-3.2.1.slim.min.js');
//	res.sendFile(path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.slim.min.js'));
// });

app.get('/script.js', function (req, res) {
	res.sendFile(path.join(__dirname, 'script.js'));
});

// **** Request Event Handlers: End ****

module.exports = app;

// End of File.
