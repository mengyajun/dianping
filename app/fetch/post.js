import 'whatwg-fetch';
import 'es6-promise';

//将对象拼接成 



export function post(url,paramsObj){
	var result  = fetch(url,{
		method:'POST',
		credentials:'include',
		headers:{
			'Accept':'application/json,text/plain,*/*',
			'Content-Type':'application/x-www-form-urlencoded'
		},
		body:obj2params(paramsObj)
	})
}