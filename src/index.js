import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './routes';
import '@fortawesome/fontawesome-free/css/all.css'
import './css/index.css';

const enhancers = compose( applyMiddleware( ReduxThunk ), window.devToolsExtension
	? window.devToolsExtension()
	: f => f);

const store = createStore( reducers, enhancers );

ReactDOM.render(
  	<Provider store={ store }>
	  	<Router />
	</Provider>,
  	document.getElementById( 'root' )
);
