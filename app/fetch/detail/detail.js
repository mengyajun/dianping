import {get} from '../get.js'

export function getInfoData(id){
	const result = get('/api/detail/info/' +id);
	return result;
}

export function getCommentData(id){

	const commentResult = get('/api/detail/comment/'+id)
	return commentResult;
}