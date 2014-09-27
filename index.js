var server = require("./server");
var router = require("./router");
var requestHandler = require("./requestHandler");

//Collection of handles
var handle{}

handle["/"] = requestHandler.start;
handle["/start"] = requestHandler.start;
handle["/upload"] = requestHandler.upload;

server.start(router.route, handle);
