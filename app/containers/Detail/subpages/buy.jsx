import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BuyAndStore from '../../../components/BuyAndStore/index.jsx'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeAction from '../../../actions/storeAction.js';
import { browserHistory,withRouter} from 'react-router-dom'
//先判断改商品是否被收藏，如果已被收藏，则显示已收藏，在用户中心页可以查看
//如果未收藏，显示收藏和购买两个按钮。
class Buy extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			isStore : false
		}
	}
	render(){
		return (
			<BuyAndStore 
				isStore = {this.state.isStore} 
				storeClickHandle = {this.storeClickHandle.bind(this)}
				buyClickHandle = {this.buyClickHandle.bind(this)}
			/>
		)
	}
	componentDidMount(){
		//判断商品是否已经被收藏
		const goodsId = this.props.id;
		const goodsStore = this.props.goodsStore;
		if (JSON.stringify(goodsStore) == "{}") {
			return false
		}else{
			goodsStore.map((item,index) => {
				if (item.id === goodsId) {
					this.setState({
						isStore:true
					})
				}
				return false	
			})
		}
	}
	//验证登录
	loginCheck(){
		const userInfo = this.props.userInfo;
		if ( userInfo.hasOwnProperty("userName")) {
			return true;			
		}else{
			this.props.history.push('/login');
		}		
	}
	storeClickHandle(){
		let loginFlag = this.loginCheck();
		if (loginFlag) {
			const id = this.props.id;
			const isStore = this.state.isStore;
			const storeAction = this.props.storeAction;
			if (isStore) {
				storeAction.rmGoods({id:id});
				this.setState({
					isStore:false
				})
			}else{
				storeAction.addGoods({id:id});
				this.setState({
					isStore:true
				})
			}
		}
		
	}
	buyClickHandle(){
		let loginFlag = this.loginCheck();
		if (loginFlag) {
			this.props.history.push('/user')
		}
	}
}
function mapStateToProps(state){
	return {
		userInfo:state.userInfo,
		goodsStore:state.goodsStore
	}
}
function mapDispatchToProps(dispatch){
	return {
		storeAction:bindActionCreators(storeAction,dispatch)
	}
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Buy));