import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../store/api';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Search({ match }) {
  const [response, setResponse] = useState(null);
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
      console.log('컴포넌트안에서 API 불러오기', res.data.data);
    });
  };
  useEffect(function () {
    getAPI();
  }, []);

  // context 도 불러올 수 있지만... 저는 사용법을 모르겠음
  const context = useContext(UserContext);
  console.log('context로 불러오기', context);
  return (
    <>
      <header
        style={{ padding: 30, boxShadow: '3px 2px 20px rgba(0,0,0,0.24)' }}
      >
        <div style={{ display: 'flex' }}>
          <h1>검색 페이지</h1>
          <Link to="/" style={{ padding: 10, textDecoration: 'underline' }}>
            뒤로가기
          </Link>
        </div>

        <p>
          여기는{' '}
          <span
            style={{
              color: 'white',
              background: '#ff385c',
              padding: 2,
              borderRadius: 5,
            }}
          >
            {match.params.name}
          </span>
          를 검색한 결과를 나타내고 있습니다
        </p>
      </header>
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
                  key={index}
                  style={{ padding: 30, width: '33%', flexWrap: 'wrap' }}
                >
                  <p style={{ marginBottom: 10 }}>{obj.location}</p>
                  <img src={obj.img} style={{ borderRadius: 10 }}></img>
                  <p>{obj.information}</p>
                  <p style={{ fontWeight: 'bold' }}> {obj.onprice}</p>
                  <p style={{ color: '#bbb', fontSize: '12px' }}>{obj.name}</p>
                </div>
              );
            })
          ) : (
            <div>
              <p
                className="loading"
                style={{
                  display: 'block',
                  color: '#666',
                  textAlign: 'center',
                  padding: 20,
                }}
              >
                로딩중입니다...
              </p>
            </div>
          ))
        }
      </div>
    </>
  );
}

export default Search;
