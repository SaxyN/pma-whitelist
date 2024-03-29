import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from "redux-thunk";
import combineReducers from "./store/index";
import logger from 'redux-logger'
import App from './App';

const middle = [thunk, logger]
const store = createStore(combineReducers, applyMiddleware(...middle));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);