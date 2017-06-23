import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getCommentData} from '../../../fetch/detail/detail.js'
import CommentListComponent from '../../../components/CommentList/index.jsx';
import LoadMore from '../../../components/LoadMore/index.jsx'
import './detailSubpage.less'
class CommentList extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			data:[],
			hasMore: false,
            isLoadingMore: false,
            page: 0
		}
	}
	render(){
		return (
			<div className="detail-comment-subpage">
				<h2>用户点评</h2>
				{ 
					this.state.data.length ? 
				    <CommentListComponent data={this.state.data}/> : 
				    <div>加载中...</div>
				}
				{
					this.state.hasMore ?
					<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>:
					''
				}
			</div>
			
		)
	}
	componentDidMount(){
		const id = this.props.id
		const commentPageOneData = getCommentData(0,id);
		this.handleResult(commentPageOneData)		   
	}
	loadMoreData(){
		this.setState({
			isLoadingMore:true
		})
		const id = this.props.id;
		const page = this.state.page;
		const result = getCommentData(page,id);
		this.handleResult(result);
		this.setState({
			isLoadingMore:false
		})
	}
	handleResult(res){
		res.then( res => {
			return res.json();
		}).then(res => {
			const page = this.state.page;
			this.setState({
				page:page+1
			})
			const hasMore = res.hasMore;
			const data = res.data;	
			this.setState({
				data:this.state.data.concat(data)
			})
		})	

	}
}

export default CommentList