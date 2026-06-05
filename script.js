//your JS code here. If required.
document.getElementById("form").addEventListener("submit",function(e){
	e.preventDefault();
	let name = document.getElementById("name");
	let age = document.getElementById("age");
	if(name == "" || age == ""){
		alert("Please enter valid details.");
		return;
	}
	let promise = new Promise(function(resolve,reject){
		setTimeout(()=>{
			if(age>18){
				resolve(name);
			}else{
				reject(name);
			}
		},4000);
	});
	Promise.then(function (username) {
		alert(`Welcome, ${username}. You can vote`);
		
	}).catch(function(username){
		alert(`Oh sorry ${username}. You aren't old enough.`)
	});
});



												 