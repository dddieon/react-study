import React, { createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext();

const UserStore = props => {
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
    .then(res => {
      return res.data.data;
    })
    .catch(error => console.log(error));
  return (
    <UserContext.Provider value={response}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;
