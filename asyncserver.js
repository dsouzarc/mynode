var http = require("http");

function onRequest(request, response) { 
	console.log("Got request");
	response.writeHead(500, {"Content-Type": "text/plain"});
	response.write("Async Server");
	response.end();
}

http.createServer(onRequest).listen(1996);

console.log("Server started");

