//your JS code here. If required.
document.getElementById("form").addEventListener("submit",function(e){
	e.preventDefault();
	let name = document.getElementById("name").value;
	let age = Number(document.getElementById("age").value);
	if(name == "" || age == ""){
		alert("Please enter valid details");
		return;
	}
	let promise = new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age>18){
				resolve(name);
			}else{
				reject(name);
			}
		},4000);
	});
	promise.then((user)=> {
		alert(`Welcome, ${user}. You can vote.`);
		
	}).catch((user)=>{
		alert(`Oh sorry ${user}. You aren't old enough.`)
	});
});



												 