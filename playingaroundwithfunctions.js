function saySomething(word) { 
	console.log(word);
}

function execute(theFunction, theWord) { 
	theFunction(theWord);
}

execute(saySomething, "Hello World");

execute(function myOwn(word) { 
	console.log("My own: ");
	}, "Hello World");
