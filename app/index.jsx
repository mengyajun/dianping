import React from 'react';
import RouterMap from './routers/RouterMap.jsx';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import { hashHistory } from 'react-router';
import './static/css/common.less';
import './static/css/font.css'

const store = configureStore();

render(
	<Provider store={store}>
		<RouterMap/>
	</Provider>,
	document.getElementById('root')
);
