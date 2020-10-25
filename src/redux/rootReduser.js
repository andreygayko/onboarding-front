import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import exampleReducer from './example/reducers';

export default combineReducers({
  productData: exampleReducer,
  routerData: routerReducer,
  getToken: exampleReducer,
});
