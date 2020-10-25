import axios from 'axios';

import { REQUEST_PRODUCT, RECEIVE_PRODUCT, SET_AUTHORIZE, REQUEST_AUTHORIZE } from '../actionTypes';

export const requestAuthorize = () => (dispatch) => {
  dispatch({
    type: REQUEST_AUTHORIZE,
  });
};

export const setAuthorize = (token) => (dispatch) => {
  dispatch({
    type: SET_AUTHORIZE,
    token: token,
  });
};

export const sendCredentials = (data) => async (dispatch) => {
  dispatch(requestAuthorize());
  const result = await axios({
    method: 'post',
    url: 'http://localhost:8080/auth/login',
    headers: {},
    data: data
  })
  console.log(data);
  //const token = Math.floor(Math.random()*100);
  dispatch(setAuthorize(result.data.token/*token*/))
}

export const requestProduct = () => (dispatch) => {
  dispatch({
    type: REQUEST_PRODUCT,
  });
};

export const receiveProduct = (data) => (dispatch) => {
  dispatch({
    type: RECEIVE_PRODUCT,
    payload: data,
  });
};

export const fetchProduct = () => async (dispatch) => {
  dispatch(requestProduct());
  const result = await axios({
    method: 'get',
    url: 'https://reqres.in/api/products',
    headers: {},
  });
  dispatch(receiveProduct(result.data.data));
};

// State selection
export const getProduct = (state) => state.productData;

export const getAuth = (state) => state.getToken;
