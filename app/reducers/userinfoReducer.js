import * as actionTypes from '../constants/actionTypes/actionTypes.js';

const initState = {};

const userInfo = function(state = initState,action){
	console.log(action.type);
	switch(action.type){
		case actionTypes.USER_UPDATE:
			return action.data;
		default:
			return state;
	}
}
export default userInfo
