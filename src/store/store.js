import { createStore } from 'redux';
import axios from 'axios';

const GET_API = 'GET_API';
const COME = 'COME';
const GET_SUCCESS = 'GET_SUCCESS';
const GET_FAILURE = 'GET_FAILURE';

export const datas = dispatch => {
  try {
    const response = axios({
      method: 'post',
      url: 'https://pure-chamber-23730.herokuapp.com/api/',
      headers: {},
      data: {
        area: '서울',
        checkin: '2020-11-16',
        checkout: '2020-11-20',
        adults: 2,
        children: 0,
        infants: 0,
      },
    }).then(res => dispatch({ type: GET_SUCCESS, payload: { res } }));
  } catch (e) {
    dispatch({ type: GET_FAILURE });
  }
};

export const dataToStore = data => {
  return {
    type: GET_API,
    data,
  };
};

export const getFromStore = data => {
  return {
    type: COME,
    data,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_API:
      return [{ data: action.data, ...state }];
    case COME:
      return [{ ...state }];
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
