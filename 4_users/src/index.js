import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import user from './reducers/user.js';

import './index.css';

let reducers = {
  user: user,
};
const logger = ({ getState, dispatch }) => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd(action.type);
  return result;
};

const crashReporter = ({ getState, dispatch }) => next => action => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err)
    // Raven.captureException(err, {
    //   extra: {
    //     action,
    //     state: store.getState()
    //   }
    // })
    throw err;
  }
}


let userApp = combineReducers(reducers);
let store = createStore(
  userApp,
  applyMiddleware(logger, crashReporter)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
