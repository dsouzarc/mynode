function route(handle, pathname) { 
	console.log("Routing for: " + pathname);

	if(typeof handle[pathname] === 'function') { 
		return handle[pathname]();
	}
	else {
		console.log("No handle found for: " + pathname); 
		return "404, not found";
	}
}

exports.route = route;