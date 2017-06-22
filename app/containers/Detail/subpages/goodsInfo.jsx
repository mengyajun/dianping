import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from '../../../fetch/detail/detail.js'
import DetailInfo from '../../../components/DetailInfo/index.jsx'
class GoodsInfo extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state={
			data:false
		}
	}
	render(){
		return (
			<div>
				{this.state.data ? <DetailInfo data={this.state.data}/> : ''}
			</div>
		)
	}
	componentDidMount(){
		const id = this.props.id;
		const goodsRes = getInfoData(id);
		console.log(goodsRes)
		goodsRes.then(res => {
			return res.json();
		}).then(json => {
			console.log(json)
			this.setState({
				data:json
			})
		})

	}
}

export default GoodsInfo