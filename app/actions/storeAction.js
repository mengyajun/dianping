import * as actionTypes from '../constants/actionTypes/actionTypes.js';
export function addGoods(data){
	return {
		type:actionTypes.STORE_ADD,
		data
	}
}
export function rmGoods(data){
	return {
		type:actionTypes.STORE_RM,
		data
	}
}
