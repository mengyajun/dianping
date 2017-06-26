import * as storeTypes from '../constants/storeTypes/storeTypes.js';
export function addGoods(data){
	return {
		type:storeTypes.STORE_ADD,
		data
	}
}
export function rmGoods(data){
	return {
		type:storeTypes.STORE_RM,
		data
	}
}
