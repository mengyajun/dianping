import * as actionTypes from '../constants/actionTypes/actionTypes.js';

const initState = {};

const userInfo = function(state = initState,action){
	switch(action.type){
		case actionTypes.USER_UPDATE:
			return Object.assign(state,action.data);
		case actionTypes.USER_SET:
			return Object.assign(state,action.data);
		default:
			return state;
	}
	// switch(action.type){
	// 	case actionTypes.USER_UPDATE:
	// 		state.cityName = action.data.cityName
	// 		return state;
	// 	case actionTypes.USER_SET:
	// 		return state.push(action.data);
	// 	default:
	// 		return state;
	// }
}
export default userInfo