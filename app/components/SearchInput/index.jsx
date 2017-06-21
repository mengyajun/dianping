import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './searchInput.less'
class SearchInput extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			value:''
		}
	}
	render(){
		return (
			<div className="search-container">
				<i className="icon-search"></i>
				<input  type="text" 
						placeholder="请输入关键字"
						value={this.state.value}
						onChange={this.changeHandle.bind(this)}
						onKeyUp={this.keyUpHandle.bind(this)}
				/>
			</div>
		)
	}
	changeHandle(e){
		this.setState({
			value:e.target.value
		})
	}
	keyUpHandle(e){
		if (e.keyCode !== 13) {
			return
		}
		this.props.enterHandle(e.target.value)
	}
}

export default SearchInput