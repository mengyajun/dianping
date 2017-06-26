import * as storeTypes from '../constants/storeTypes/storeTypes.js';

const initState = [];

const goodsStore = function(state = initState,action){
	switch(action.type){
		case storeTypes.STORE_ADD:
			state.unshift(action.data);
			return state;
		case storeTypes.STORE_RM:
			let indexItem = state.map((item,index) => {
				if(item.id === action.data.id){
					return index	
				}
			})
			state.splice(indexItem,1) 
			console.log(state);
			return state;
		default:
			return state;
	}
}
export default goodsStore

