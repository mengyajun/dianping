import * as actionTypes from '../constants/actionTypes/actionTypes.js';
export function setUser(data){
	return {
		type:actionTypes.USER_SET,
		data
	}
}
export function userUpdate(data){
	return {
		type:actionTypes.USER_UPDATE,
		data
	}
}
