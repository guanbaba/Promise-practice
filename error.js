// new Promise(function(resolve,reject){
// 	setTimeout(function(){
// 		throw new Error("gg");
// 	},3000);
// }).then(function(value){
// 	console.log(value);
// },function(error){
// 	console.log("Error is: "+error.message);
// })

new Promise(function(resolve,reject){
	setTimeout(function(){
		reject("gg");
	},3000);
}).then(function(value){
	console.log(value);
},function(value){
	console.log("Error is: "+value);
})