import { combineReducers } from 'redux';
import userInfo from './userinfoReducer.js';
import goodsStore from './storeReducer.js'

export default combineReducers({
	userInfo,
	goodsStore
})