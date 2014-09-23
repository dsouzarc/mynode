function saySomething(word) { 
	console.log(word);
}

function execute(theFunction, theWord) { 
	theFunction(theWord);
}

execute(saySomething, "Hello World");
