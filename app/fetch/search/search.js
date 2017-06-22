import {get} from '../get.js';

export function searchListData(city,page){
	const listRes = get('/api/listdata/:' + encodeURIComponent(city) + '/:' + page);
	// const listRes = get('/api/listdata')
	return listRes;
}