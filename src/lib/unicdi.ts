import {Client} from "undici";
const http = new Client("https://discord.com");

export let uncidiGet  = (path : string  , token : string ) => {
	const promise  = new Promise((resolve  , reject) => {
	http.request({path:  path  , method : "GET" , headers :{"Content-Type" : "application/json" , "Authorization" : "Bot " +  token}} , (err, data) => {
		if (err) { 
			return reject(err);
		}
		let body :any= [];
		data.body.on("data",chunk =>{
			body.push(chunk);
		});
		data.body.on("close" ,() => {
			const buffer = Buffer.concat(body).toString(); 
			const data = JSON.parse(buffer);
			resolve(data);
		});
	});	
});

return promise;
}; 


export let uncidiOther = (  method : string ,path :  string , token :  string , data) =>{
const promise = new Promise((resolve , reject) => {
	http.request({path : path ,  method: method, headers : {"Content-Type": "application/json" , "Authorization" : "Bot "+ token} , body : data} , (err, data) =>{
		if(err) { 
			return reject(err);
		}
		let body :  any =[];
		data.body.on("data", chunk => {
			body.push(chunk);
		});
		data.body.on("close" , () => {
			const buffer = Buffer.concat(body).toString(); 
			const data = JSON.parse(buffer);
			resolve(data);
		})
	});
});

return promise;
};






export let uncidiDel = ( path :  string , token :  string ) =>{
	const promise = new Promise((resolve , reject) => {
		http.request({path : path, method: "DELETE", headers : {"Content-Type": "application/json" , "Authorization" : "Bot "+ token}},(err, data) =>{
			if(err) { 
				return reject(err);
			}
			let body :  any =[];
			data.body.on("data", chunk => {
				body.push(chunk);
			});
			data.body.on("close" , () => {
				const buffer = Buffer.concat(body).toString(); 
				const data = JSON.parse(buffer);
				resolve(data);
			})
		});
	});
	
	return promise;
	};
	
