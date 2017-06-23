import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import CommentItem from './CommentItem/index.jsx'
class CommentListComponent extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const data = this.props.data
		return (
			<div>
				{data.map((item,index) => {
					return <CommentItem  data={item} key={index}/>
				})}
			</div>
			
		)
	}
	
}

export default CommentListComponent