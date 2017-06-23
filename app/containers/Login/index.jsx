import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import * as userActions from '../../actions/actions.js'
import User from '../User/index.jsx'
import LoginComponent from '../../components/Login/index.jsx'
import Header from '../../components/Header/index.jsx'
class Login extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			isLogin:false
		}
	}
	render(){
		return (
			<div>
				
				{
					this.state.isLogin ?
					<User/> :
					<div>
						<Header title="登录"/>
						<LoginComponent loginHandle={this.loginHandle.bind(this)}/>
					</div>
					
				}
			</div>
		)
	}
	componentDidMount(){
		if (this.props.userInfo.hasOwnProperty("userName")) {
			this.setState({
				isLogin:true
			})
		}
	}
	loginHandle(newUserName){
		//保存用户
		const actions = this.props.userActions;
		const userInfo = this.props.userInfo;
		userInfo.userName = newUserName;
		actions.setUser({
			userName:newUserName
		})
	}
}

function mapStateToProps(state){
	return {
		userInfo:state.userInfo
	}
}
function mapDispatchToProps(dispatch){
	return {
		userActions:bindActionCreators(userActions,dispatch)
	}

}
export default connect(mapStateToProps,mapDispatchToProps)(Login)