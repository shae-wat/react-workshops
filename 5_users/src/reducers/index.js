import { createStore, combineReducers, applyMiddleware } from 'redux';
import section from './section.js';
import user from './user.js';
import logger from 'redux-logger';

let reducers = {
  section: section,
  user: user,
};
let userApp = combineReducers(reducers);

let store = createStore(
  userApp,
  applyMiddleware(logger)
);

export default store;
