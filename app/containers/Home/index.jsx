import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import HomeHeader from '../../components/Homeheader/index.jsx';
import Category from '../../components/Category/index.jsx';
import Ad from './subpages/homeAd.jsx';

class Home extends React.Component {
	constructor(props,context){
		super(props,context);
		this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
	}
    // render() {
    //     return (
    //         <div>
    //         	<HomeHeader cityName={this.props.userInfo.cityName}/>
    //         	<Category/>
    //         </div>
    //     )
    // }
    render() {
        return (
            <div>
            	<HomeHeader/>
            	<Category/>
            	<div style={{height:'10px'}}></div>
            	<Ad/>
            </div>
        )
    }
}
function mapStateToProps(state){
	return {		
		userInfo:state.userInfo
	}
}
function mapDispatchToProp(dispatch){
	return {}
}

export default connect(mapStateToProps,mapDispatchToProp)(Home)