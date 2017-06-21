import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/index.jsx';
import {connect} from 'react-redux';
import CurrentCity from '../../components/CurrentCity/index.jsx'
import CityList from '../../components/CityList/index.jsx'
import * as userActions from '../../actions/actions.js'
import { bindActionCreators } from 'redux'
import {browserHistory} from 'react-router-dom'
import { withRouter } from 'react-router-dom'
class City extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<Header title="选择城市"/>
				<CurrentCity cityName={this.props.userInfo.cityName}/>	
				<CityList changeCityFn={this.changeCity.bind(this)}/>	
			</div>
		)
	}
	changeCity(newCity){
		//修改redux中的state
		this.props.userActions.userUpdate({
			cityName:newCity
		})
		// browserHistory.push('/')
		window.history.back()
	}
}
function mapStateToProp(state){
	return {userInfo:state.userInfo}
}
function mapDispatchToProp(dispatch){
	return {
		userActions:bindActionCreators(userActions,dispatch)
	}
}

export default withRouter(connect(mapStateToProp,mapDispatchToProp)(City))