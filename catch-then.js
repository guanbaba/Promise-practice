new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log("begin");
		resolve();
	},1000);
}).then(function(){
	console.log("one");
	throw new Error("gg");
}).catch(function(value){
	console.log(value);
}).then(function(){
	console.log("two");
}).then(function(){
	console.log("three");
}).catch(function(error){
	console.log(error);
})