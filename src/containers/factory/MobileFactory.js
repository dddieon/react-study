import React from 'react';
import { RiZoomInLine } from 'react-icons/ri';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
// components
import MobileFactoryContainer from './MobileFactoryContainer';
import MobileInput from './MobileInput';
import MobileLabel from './MobileLabel';
// hooks
import useInput from '../../util/hooks/useInput';

function MobileFactory() {
  const inputValue = useInput('');
  const history = useHistory();
  const onSubmit = e => {
    alert(`${inputValue.value}를 검색합니다`);
    e.preventDefault();
    axios({
      method: 'post',
      url: 'https://pure-chamber-23730.herokuapp.com/api/',
      headers: {},
      data: {
        area: inputValue.value,
        checkin: '2020-11-16',
        checkout: '2020-11-20',
        adults: 2,
        children: 0,
        infants: 0,
      },
    }).then(res => console.log(res.data.data));
    history.push({
      pathname: `/s/${inputValue.value}/homes`,
      //search: '?checkin=2020-11-16&checkout=2020-11-20&adults=2',
    });
  };
  return (
    <MobileFactoryContainer className="mobile-factory">
      <form action="/s/all" method="get" role="search" onSubmit={onSubmit}>
        <MobileLabel htmlFor="mobile-factory--input">
          <button type="submit">
            <RiZoomInLine
              style={{ display: 'block', fontSize: 20, margin: '0 12px' }}
            />
          </button>
          <MobileInput
            type="text"
            placeholder="어디로 여행 가세요?"
            autoComplete="off"
            autocorrect="off"
            name="query"
            id="mobile-factory--input"
            value={inputValue.value}
            onChange={inputValue.onChange}
          />
        </MobileLabel>
      </form>
    </MobileFactoryContainer>
  );
}

export default MobileFactory;
