'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({port: 4000, host: 'localhost'});

server.route({
	method: 'GET',
	path: '/',
	handler: function (request, reply) {
		reply('Hello World');
	}
});

server.route({
	method: 'GET',
	path: '/{name}',
	handler: function(request, reply) {
		reply('Hello, ' + encodeURIComponent(request.params.name) + '!');
	}
});

server.start((err) => {
	if (err) {
		throw err;
	}
	console.log('Server running ...');
});