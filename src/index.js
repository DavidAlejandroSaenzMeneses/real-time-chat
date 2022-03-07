import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import './assets/css/main.css';
import App from './App';
import chat from './reducers/index.js';
import {addUser} from './actions';

const store = createStore(chat);
store.dispatch(addUser('David'));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);