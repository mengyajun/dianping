
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getListData} from '../../../fetch/home/home.js';
import ListDataComponent from '../../../components/HomeList/index.jsx';
import LoadMore from '../../../components/LoadMore/index.jsx'
import './style.less'

class List extends React.Component{
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
		this.state = {
			hasMore:false,
			listdata:[],
			isLoadingMore:false,
			page:0
		}
	}
	render(){
		return (
			<div>
				<h2 className='home-list-title'>猜你喜欢</h2>
				{ this.state.listdata.length ? 
				  <ListDataComponent listdata={this.state.listdata} /> : 
				  <p>加载中...</p>
				}
				{
					this.state.hasMore ? <LoadMore/> : ''
				}
			</div>			
		)
	}
	componentDidMount(){
		//获取首页数据并展示
		const city = this.props.cityName;
		const listdata = getListData(city,0);
		this.handleResult(listdata);
		

	}
	handleResult(result){
		result.then(result => {
			return result.json()
		}).then(result => {
			this.setState({
				listdata:result.data,
				hasMore:result.hasMore
			})
		})
	}
}

export default List