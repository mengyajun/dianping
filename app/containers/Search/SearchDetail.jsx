import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchHeader from '../../components/SearchHeader/index.jsx'
import SearchList from '../../containers/Search/subpages/searchList.jsx'
import{withRouter} from 'react-router-dom'

class SearchDetail extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		
	}
	render(){		
		return (
			<div>
				<SearchHeader />
				<SearchList />
			</div>			
		)
	}
	componentDidMount(){
		const params = this.props
		console.log(params.match.params);
	}
}

export default withRouter(SearchDetail) 
