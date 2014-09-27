var http = require("http");
var url = require("url");

function start(route, handle) { 
	function onRequest(request, response) { 
		var pathName = url.parse(request.url).pathname;
		console.log("Received request: " + pathName);
		route(handle, pathName);
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.write("From start()");
		response.end();
	}

	http.createServer(onRequest).listen(1996);
	console.log("Server started");
}

exports.start = start;

/*
http.createServer(function(myRequest, myResponse) { 
	myResponse.writeHead(200, {"Content-Type": "text/plain"});
	myResponse.write("Hello World! Hahaaha");
	myResponse.end();
}).listen(1996);
*/
