import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import rootReducer from './store/reducers/rootReducer'
import './index.css';
import App from './components/app/';

const store = createStore(
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(thunk, )
    
  ))

  // Teat1

const app = (
    <Provider store={store}>
      <App />
    </Provider>
)
ReactDOM.render(app, document.getElementById('root'));


