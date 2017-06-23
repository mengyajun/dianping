import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './loadMore.less'

class LoadMore extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
	render(){
		return (
			<div className='load-more' ref="loadEle">
				{ 
					this.props.isLoadingMore ?
				    <div>加载中...</div> :
				    <div onClick = {this.loadMoreFn.bind(this)}>点击加载更多</div>
				} 
			</div>
		)
	}
	componentDidMount(){
		//上拉加载更多
		const loadEle = this.refs.loadEle;
		const loadMoreFn = this.props.LoadMoreFn;
		let timeoutId
		function callback(){
			const loadEleTop = loadEle.getBoundingClientRect().top;
			const screenHeight = window.screen.height;
			if (loadEleTop && loadEleTop < screenHeight) {
				loadMoreFn();
			}
		}

		window.addEventListener("scroll",function(){
			if(this.props.isLoadingMore){
				return;
			}
			if(timeoutId){
				clearTimeout()
			}
			timeoutId = setTimeout(callback,50)
		}.bind(this))
	}
	loadMoreFn(){
		this.props.LoadMoreFn();
	}
}

export default LoadMore