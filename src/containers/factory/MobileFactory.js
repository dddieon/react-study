import React, { useState } from 'react';
import { RiZoomInLine } from 'react-icons/ri';
import MobileFactoryContainer from './MobileFactoryContainer';
import MobileInput from './MobileInput';
import MobileLabel from './MobileLabel';
import { useHistory } from 'react-router-dom';

const useInput = initalValue => {
  const [value, setValue] = useState(initalValue);
  const onChange = e => {
    const {
      target: { value },
    } = e;
    setValue(value);
    console.log(value);
  };
  return { value, onChange };
};

export default function MobileFactory() {
  const inputValue = useInput('');
  const history = useHistory();
  const onSubmit = e => {
    alert(`${inputValue.value}를 검색합니다`);
    e.preventDefault();
    history.push({
      pathname: `/s/${inputValue.value}/homes`,
      search: '?checkin=2020-11-12&checkout=2020-11-13&adults=2',
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
