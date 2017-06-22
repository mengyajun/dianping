import {render} from 'react-dom';
import React from 'react';
import {BrowserRouter,HashRouter, Route, Link,hashHistory} from 'react-router-dom';
import App from '../containers/index.jsx'
import Home from '../containers/Home/index.jsx'
import City from '../containers/City/index.jsx'
import Search from '../containers/Search/index.jsx'
import SearchDetail from '../containers/Search/SearchDetail.jsx'
import Detail from '../containers/Detail/index.jsx'
class RouterMap extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<App>
					<Route path='/'  exact component={Home} />
					<Route path='/city'  exact component={City} />
					<Route path='/search/:category' component={SearchDetail}/>
					<Route path='/search'  exact component={Search} />
					<Route path='/detail/:id' component={Detail}/>
				</App>
			</BrowserRouter>
			)
	}
}
export default RouterMap

