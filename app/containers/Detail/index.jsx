import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/index.jsx';
import GoodsInfo from './subpages/goodsInfo.jsx';
import CommentsList from './subpages/commentList.jsx';
class Detail extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const id = this.props.match.params.id;
		return (
			<div>
				<Header title="商品详情"/>
				<GoodsInfo id={id}/>
				<CommentsList id={id}/>
			</div>
			)			
	}
	
}

export default Detail