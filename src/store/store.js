// redux 설정을 시도하기 위한 dummy입니다

import { createStore } from 'redux';

const play = 'play';

export const doIt = text => {
  return {
    type: play,
    text,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case play:
      return [{ text: action.text, ...state }];
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
