function start() { 
	console.log("Request Handler start called");
	return "Hello, Start";
}

function upload() { 
	console.log("Request Handler upload");
	return "Hello, upload";
}

exports.start = start;
exports.upload = upload;