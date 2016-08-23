import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes';
import configureStore from './config/store';
import 'normalize.css';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
  	<Router history={browserHistory}>{routes}</Router>
	</Provider>,
  document.getElementById('root')
);