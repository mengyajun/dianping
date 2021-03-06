import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader/index.jsx'
import SearchList from '../../containers/Search/subpages/searchList.jsx'
class Search extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		const params = this.props.params;
		console.log(params);
		return (
			<div>
				<SearchHeader />
			</div>			
		)
	}
}

export default Search
