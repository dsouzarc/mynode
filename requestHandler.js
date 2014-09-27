function start() { 
	console.log("Request Handler start called");

	function sleep(milliseconds) { 
		var startTime = new Date().getTime();
		while(new Date().getTime() < startTime + milliseconds);
	}

	sleep(10000);

	return "Hello, Start";
}

function upload() { 
	console.log("Request Handler upload");
	return "Hello, upload";
}

exports.start = start;
exports.upload = upload;