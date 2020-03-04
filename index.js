"use strict";

module.exports.handler = (event, context, callback) => {
	console.log("Trigger", event);
	callback(null, {
		statusCode: 200,
		body: JSON.stringify({ message: "Trigger", input: event }, null, 2)
	});
};
