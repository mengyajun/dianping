import {get} from '../get.js'

export function getInfoData(id){
	const result = get('/api/detail/info/' +id);
	console.log("detail result")
	console.log(result)
	return result;
}

export function getCommentData(id){
	const commentResult = get('/api/detail/comment/'+id)
	console.log("comment result")
	console.log(commentResult)
	return commentResult;
}