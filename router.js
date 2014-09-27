function route(handle, pathname) { 
	console.log("Routing for: " + pathname);

	if(typof handle[pathname] === 'function') { 
		handle[pathname]();
	}
	else {
		console.log("No handle found for: " + pathname); 
	}
}

exports.route = route;