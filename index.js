"use strict";

module.exports.handler = (event, context, callback) =>
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ path: event.path, method: event.httpMethod, version: 3 })
	});
