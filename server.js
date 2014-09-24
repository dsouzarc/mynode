var http = require("http");

http.createServer(function(myRequest, myResponse) { 
	myResponse.writeHead(200, {"Content-Type": "text/plain"});
	myResponse.write("Hello World! Hahaaha");
	myResponse.end();
}).listen(1996);

