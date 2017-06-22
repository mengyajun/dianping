
import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { getListData} from '../../../fetch/home/home.js';
import ListDataComponent from '../../../components/HomeList/index.jsx';
import LoadMore from '../../../components/LoadMore/index.jsx'


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
				{ 
					this.state.listdata.length ? 
				    <ListDataComponent listdata={this.state.listdata} /> : 
				    <p>加载中...</p>
				}
				{
					this.state.hasMore ? 
					<LoadMore isLoadingMore={this.state.isLoadingMore} LoadMoreFn={this.loadMoreData.bind(this)}/> : 
					''
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
	//加载更多数据处理
	loadMoreData(){
		this.setState({
			isLoadingMore:true
		})
		const cityName = this.props.cityName;
		const page = this.state.page;
		const result = getListData(cityName,page);
		this.handleResult(result);
		this.setState({
			isLoadingMore:false,
			page:page+1
		})
	}
	handleResult(result){
		result.then(result => {
			return result.json()
		}).then(result => {
			const data = result.data;
			const hasMore = result.hasMore;
			this.setState({
				listdata:this.state.listdata.concat(data),
				hasMore:hasMore
			})
		})
	}
}

export default List