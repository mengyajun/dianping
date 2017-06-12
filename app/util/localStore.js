export default {
	getItem:function(key){
		let value = localStorage.getItem(key);
		return value
		// try{
		// 	value = localStorage.getItem(key)
		// }catch(ex){
		// 	console.log('localStorage.getItem报错'+ex.message)
		// }finaly{
		// 	return value
		// }
	},
	setItem:function(key,value){
		localStorage.setItem(key,value)
		// try{
		// 	localStorage.setItem(key,value)
		// }catch(ex){
		// 	console.log('localStorage.setItem报错'+ex.message)
		// }
	}
}