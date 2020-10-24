// redux 설정을 시도하기 위한 dummy입니다

import { createStore } from 'redux';

const 액션테스트 = '액션테스트';

export const 액션함수 = text => {
  return {
    type: 액션테스트,
    text,
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 액션테스트:
      return [{ text: action.text, ...state }];
    default:
      return state;
  }
};
const store = createStore(reducer);

export default store;
