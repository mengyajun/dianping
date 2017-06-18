import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import ListItem from './listItem/index.jsx'
import './homelist.less'

class ListDataComponent extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){

		return (
			<div className = 'list-container'>
				{this.props.listdata.map((item,index) => {
				return (
					<ListItem data={item} key={index}/>
				)
				})}
			</div>
			
		)
	}
}

export default ListDataComponent