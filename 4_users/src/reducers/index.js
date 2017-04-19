import { createStore, combineReducers, applyMiddleware } from 'redux';
import user from './user.js';
import logger from 'redux-logger';

let reducers = {
  user: user,
};
let userApp = combineReducers(reducers);

let store = createStore(
  userApp,
  applyMiddleware(logger)
);

export default store;
