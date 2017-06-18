import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './homeHeader.less';

class HomeHeader extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div id="home-header" className="clear-fix">
				<div className="float-left">
					<span>{this.props.cityName}</span>
					&nbsp;
					<i className="icon-angle-down"></i>
				</div>
				<div className="float-right">
					<i className="icon-user"></i>
				</div>
				<div className="home-header-middle">
					<div className="search-container">
						<i className="icon-search"></i>
						<input type="text" placeholder="请输入关键字"/>
					</div>
				</div>
			</div>
		)
	}
	// render(){
	// 	return (
	// 		<div id="home-header" className="clear-fix">
	// 			<div className="float-left">
	// 				<span>北京</span>
	// 				&nbsp;
	// 				<i className="icon-angle-down"></i>
	// 			</div>
	// 			<div className="float-right">
	// 				<i className="icon-user"></i>
	// 			</div>
	// 			<div className="home-header-middle">
	// 				<div className="search-container">
	// 					<i className="icon-search"></i>
	// 					<input type="text" placeholder="请输入关键字"/>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	)
	// }
}
export default HomeHeader