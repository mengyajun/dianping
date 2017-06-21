import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput/index.jsx'
class SearchHeader extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<span>
					<i className="icon-chevron-left"></i>
				</span>
				<SearchInput/>
			</div>
		)
	}
	
}

export default SearchHeader