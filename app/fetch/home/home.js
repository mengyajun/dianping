import {get} from '../get.js';

export function getAdData(){
	const result = get('api/homead');
	return result;
}