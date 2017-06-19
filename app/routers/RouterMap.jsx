import {render} from 'react-dom';
import React from 'react';
import {BrowserRouter, Route, Link,hashHistory} from 'react-router-dom';
import App from '../containers/index.jsx'
import Home from '../containers/Home/index.jsx'
import City from '../containers/City/index.jsx'


class RouterMap extends React.Component{
	render(){
		return (
			<BrowserRouter history={hashHistory}>
				<App>
					<Route path='/'  exact component={Home} />
					<Route path='/city'  exact component={City} />
				</App>
			</BrowserRouter>
			)
	}
}
export default RouterMap

