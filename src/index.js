import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Router
import { BrowserRouter } from 'react-router-dom';

//Redux
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import navReducer from './store/reducers/navbar';
const rootReducer = combineReducers({
  navbar: navReducer
});

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
