import * as actionTypes from '../constants/actionTypes/actionTypes.js';
export function userUpdate(data){
	return {
		type:actionTypes.USER_UPDATE,
		data
	}
}
