import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import SearchInput from '../SearchInput/index.jsx'
import './searchHeader.less'
import {BrowserHistory, withRouter} from 'react-router-dom'
 
class SearchHeader extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			value:''
		}
	}
	render(){
		return (
			<div id="search-header" className="clear-fix">
				<div className="search-header-left">
					<span onClick={this.clickHandle.bind(this)}>
						<i className="icon-chevron-left"></i>
					</span>
				</div>
				<div className='search-header-right'>
					<span onClick={this.searchEnter.bind(this)}>搜索</span>
				</div>
				<div className="search-header-middle">
					<SearchInput changeHandle={this.changeHandle.bind(this)}/>	
				</div>
			</div>
		)
	}	
	clickHandle(){
		window.history.back();
	}
	searchEnter(){
		let searchVal = this.state.value;
		// console.log(this.props.history)
		this.props.history.push('/search/'+encodeURIComponent(searchVal));
	}
	changeHandle(e){
		this.setState({
			value:e.target.value
		})
	}
}

export default withRouter(SearchHeader) 