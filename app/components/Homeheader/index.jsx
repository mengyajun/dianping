import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './homeHeader.less';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput/index.jsx'
import {hashHistory} from 'react-router'
class HomeHeader extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div id="home-header" className="clear-fix">
				<div className="float-left">
					<Link to='/city'>
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
				</div>
				<div className="float-right">
					<i className="icon-user"></i>
				</div>
				<div className="home-header-middle">
					<Link to='/search'>
						<SearchInput/>
					</Link>
					
				</div>
			</div>
		)
	}
	// enterHandle(value){
	// 	hashHistory.push('search/all'+encodeURIComponent(value));
	// }
}
export default HomeHeader