import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../store/api';
import axios from 'axios';

function Search({ match }) {
  const [response, setResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getAPI = () => {
    axios({
      method: 'post',
      url: 'https://pure-chamber-23730.herokuapp.com/api/',
      headers: {},
      data: {
        area: match.params.name,
        checkin: '2020-11-16',
        checkout: '2020-11-20',
        adults: 2,
        children: 0,
        infants: 0,
      },
    }).then(res => {
      setResponse(res.data.data);
      setIsLoading(!isLoading);
    });
  };
  useEffect(function () {
    getAPI();
  }, []);

  // context 도 불러올 수 있지만... 사용법을 모르겠음
  // const context = useContext(UserContext);
  // console.log(context);
  return (
    <>
      <h1>검색 페이지</h1>
      <p>여기는 {match.params.name}를 검색한 결과를 나타내고 있습니다</p>
      <div
        className="reslut-wrapper"
        style={{ display: 'flex', flexWrap: 'wrap' }}
      >
        {
          (!isLoading,
          response ? (
            response.map(function (obj, index) {
              return (
                <div
                  className={index}
                  style={{ padding: 30, width: '300px', flexWrap: 'wrap' }}
                >
                  <p>{obj.location}</p>
                  <img src={obj.img}></img>
                  <p>{obj.information}</p>
                  <p style={{ fontWeight: 'bold' }}> {obj.onprice}</p>
                </div>
              );
            })
          ) : (
            // <div>
            //   <p>{response[0]?.location}</p>
            //   <img src={response[0]?.img}></img>
            // </div>
            // response.filter(function (obj) {
            //   return obj;
            // })
            <p className="loading">로딩중입니다...</p>
          ))
        }
      </div>
    </>
  );
}

export default Search;
