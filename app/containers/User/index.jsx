import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../../components/Header/index.jsx'
import UserInfo from '../../components/UserInfo/index.jsx'
import OrderList from './subpage/OrderList.jsx'
import { connect } from 'react-redux'
class User extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div>
				<Header title="用户中心" />
				<UserInfo username={this.userInfo.userName} city={this.userInfo.cityName}/>
                <OrderList username={userInfo.username}/>
			</div>
		)
	}
	    componentDidMount() {
	    	const userInfo = this.props.userInfo;
        // 如果未登录，跳转到登录页面
        if ( userInfo.hasOwnProperty("userName")) {
			return true;			
		}else{
			this.props.history.push('/login');
		}
        // if (!this.props.userinfo.username) {
        //     this.props.history.push('/login');
        // }
    }
}
// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userInfo: state.userInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User)