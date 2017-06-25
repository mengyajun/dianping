import * as storeTypes from '../constants/storeTypes/storeTypes.js';

const initState = {};

const store = function(state = initState,action){
	switch(action.type){
		case storeTypes.STORE_ADD:
			state.unshift(action.data);
			return state;
		case storeTypes.STORE_RM:
			state.filter(item => {
				item.id = action.data.id
			})
			return state;
		default:
			return state;
	}
}
export default store

