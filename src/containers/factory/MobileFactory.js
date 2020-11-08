import React, { useState } from 'react';
import { RiZoomInLine } from 'react-icons/ri';
import SlickData from '../../util/data/mock';
import MobileFactoryContainer from './MobileFactoryContainer';
import MobileInput from './MobileInput';
import MobileLabel from './MobileLabel';

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
  const [dummy, setDummy] = useState([]);
  const getData = e => {
    e.preventDefault();
    fetch(SlickData)
      .then(res => setDummy(res))
      .then(console.log(dummy));
  };
  const inputValue = useInput('');
  return (
    <MobileFactoryContainer className="mobile-factory">
      <form
        action="https://www.airbnb.co.kr/s/"
        method="POST"
        onSubmit={getData}
      >
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
            id="mobile-factory--input"
            onChange={useInput}
            value={inputValue.value}
            onChange={inputValue.onChange}
          />
        </MobileLabel>
      </form>
    </MobileFactoryContainer>
  );
}
