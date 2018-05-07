console.log("Begin...");
new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve("guanshiyu");
	},3000);
}).then(function(value){
	console.log("Hello "+value);
});
console.log("End!");