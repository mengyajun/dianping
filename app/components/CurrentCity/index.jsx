import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './currentCity.less'

class CurrentCity extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className="current-city">
				{this.props.cityName}
			</div>
			
		)
	}
	
}

export default CurrentCity