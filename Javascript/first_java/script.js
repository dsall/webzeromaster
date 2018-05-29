var database = [

{
	username: "andre",
	password: "secret"
},
{
	username: "ingrid",
	password: "777"
},
{
	username: "audrey",
	password: "8888"
},
{
	username: "ibou",
	password: "123"
}
];

var news = [
	{
		username: " Moussa",
		timeline: " It's boring this programming language"
	},

	{
		username: "Malick",
		timeline: "Everything is fun"
	}
];

var usernamePrompt = prompt("Please enter your username");
var passwordPrompt = prompt("Please enter your password");

function isUserValid(user, pass){ 
	for(var i=0; i<database.length; i++){
		if(database[i].username === user && 
			database[i].password === pass){
			return true;
		}
		
	}
	return false;

}
function signIn(user, pass){
	if(isUserValid(user, pass)){
		console.log(news);
	}
	else{
		alert("Wrong credentials enterred");
	}


	// for(var i=0; i<database.length; i++){
	// 	if(database[i].username === user && 
	// 		database[i].password === pass){
	// 		console.log(news);
	// 	}
	// 	else{
	// 		console.log("error");
	// 	}
	// }
}

signIn(usernamePrompt, passwordPrompt);