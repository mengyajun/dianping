import {get} from '../get.js';

export function getAdData(){
	const result = get('/api/homead');	
	return result;
}

export function getListData(city,page){
	const listRes = get('/api/listdata/:' + encodeURIComponent(city) + '/:' + page);
	// const listRes = get('/api/listdata')
	return listRes;
}