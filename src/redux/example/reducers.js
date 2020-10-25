import { REQUEST_PRODUCT, RECEIVE_PRODUCT, SET_AUTHORIZE, REQUEST_AUTHORIZE } from '../actionTypes';

const initialState = {
  isLoading: false,
  products: [],
  token: 'abbbra',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_PRODUCT:
      return { ...state, isLoading: true };
    case RECEIVE_PRODUCT:
      return { ...state, isLoading: false, products: action.payload };
    case SET_AUTHORIZE:
      return { ...state, isLoading: false, token: action.token };
    case REQUEST_AUTHORIZE:
      return { ...state, isLoading: true };
    default:
      return state;
  }
}
