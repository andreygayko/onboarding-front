import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { reduxTimeout } from 'redux-timeout';
import rootReducer from './rootReduser';

const initialState = {};

const middleware = [thunk, logger, reduxTimeout()];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
