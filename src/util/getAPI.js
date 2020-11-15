import axios from 'axios';

const getAPI = value => {
  const peace = [];
  axios({
    method: 'post',
    url: 'https://pure-chamber-23730.herokuapp.com/api/',
    headers: {},
    data: {
      area: value,
      checkin: '2020-11-16',
      checkout: '2020-11-20',
      adults: 2,
      children: 0,
      infants: 0,
    },
  }).then(res => peace.push(...res));
  return peace;
};

export default getAPI;
