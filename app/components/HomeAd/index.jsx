import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

class HomeAd extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
				<div>
					<h2>超值特惠</h2>
					<div className="ad-container clear-fix">
						{this.props.data}
					</div>
				</div>
			)
	}
}

export default HomeAd