import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'

class BuyAndStore extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<p> BuyAndStore </p>
		)
	}
	componentDidMount(){
		
	}
}

export default  BuyAndStore 