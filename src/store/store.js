import { createStore } from 'redux';
import axios from 'axios';

const GET_API = 'GET_API';
const GET_SUCCESS = 'GET_SUCCESS';
const GET_FAILURE = 'GET_FAILURE';

// 액션생성함수
export const getFaqData = async () => {
  const faqData = await axios.get('http://localhost:5000/api/json/faq');
  return {
    type: 'GET_FAQ_DATA',
    payload: faqData.data,
  };
};

export const getData = async () => {
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
  })
    .then(res => res.data.data)
    .catch(error => console.log(error));
  return {
    type: 'GET_DATA',
    payload: response,
  };
};

// 리듀서

const initialState = {
  data: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_API:
      return [{ ...state, ...action.payload }];
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
