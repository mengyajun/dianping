import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import BuyAndStore from '../../../components/BuyAndStore/index.jsx'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as storeAction from '../../../actions/storeAction.js';

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
		return (tt
			<BuyAndStore isStore = {this.state.isStore} />
		)
	}
	componentDidMount(){
		//判断商品是否已经被收藏
		const goodsId = this.props.id;
		const store = this.props.store
	}
}
function mapStateToProps(state){
	return {
		store:state.store
	}
}
function mapDispatch(dispatch){
	return {
		storeAction:bindActionCreators(storeAction,dispatch)
	}
}
export default Buy