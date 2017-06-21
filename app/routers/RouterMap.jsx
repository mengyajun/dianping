import {render} from 'react-dom';
import React from 'react';
import {BrowserRouter, Route, Link,browserHistory} from 'react-router-dom';
import App from '../containers/index.jsx'
import Home from '../containers/Home/index.jsx'
import City from '../containers/City/index.jsx'
import Search from '../containers/Search/index.jsx'

class RouterMap extends React.Component{
	render(){
		return (
			<BrowserRouter history={browserHistory}>
				<App>
					<Route path='/'  exact component={Home} />
					<Route path='/city'  exact component={City} />
					<Route path='/search/:category(/:keyword)' exact component={Search}/>
				</App>
			</BrowserRouter>
			)
	}
}
export default RouterMap

