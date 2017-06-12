import {render} from 'react-dom';
import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import App from '../containers/index.jsx'
import Home from '../containers/home/index.jsx'


class RouterMap extends React.Component{
	render(){
		return (
			<BrowserRouter>
				<App>
					<Route path='/'  exact component={Home} />
				</App>
			</BrowserRouter>
			)
	}
}
export default RouterMap

