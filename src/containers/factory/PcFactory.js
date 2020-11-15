import React, { useState } from 'react';
import styled from 'styled-components';
import { RiZoomInLine } from 'react-icons/ri';
import Calendar from 'react-calendar';
// components
import PcFactoryContainer from './PcFactoryContainer';
import PcInput from './PcInput';
// hooks
import useInput from '../../util/hooks/useInput';

const CalendarContainer = styled.div`
  display: block;
  position: absolute;
  background: #fff;
  width: 100%;
  padding: 20px;
  left: 0;
  top: 100%;
  margin-top: 12px;
  border-radius: 32px;
  .react-calendar__viewContainer {
    display: flex;
  }
  .react-calendar__navigation__label {
    display: flex;
    justify-content: space-around;
  }
`;
export default function PcFactory() {
  // input value state
  const where = useInput('');
  const [checkIn, setCheckIn] = useState(null);
  const guest = useInput('');
  // 달력이 표시될지 여부
  const [visibleCalendar, setVisibleCalendar] = useState(false);
  // 달력 클릭 이벤트
  const onClick = event => {
    const {
      target: { name, type },
    } = event;
    if (name === 'openCalendar' || type === 'button') {
      setVisibleCalendar(true);
    } else if (event.target.classList.contains('react-calendar__tile')) {
      setVisibleCalendar(true);
      setCheckIn(event.target.children[0].getAttribute('aria-label'));
    } else if (event.target.hasAttribute('aria-label')) {
      setCheckIn(event.target.getAttribute('aria-label'));
    } else {
      setVisibleCalendar(false);
      console.log(event.target);
    }
  };
  return (
    <PcFactoryContainer className="pc-factory" onClick={onClick}>
      <form action="/s/all" className="pc-form">
        <div style={{ paddingLeft: 16 }}>
          <label htmlFor="pc-factory--input_1">
            <div>위치</div>
            <PcInput
              type="text"
              placeholder="어디로 여행 가세요?"
              autoComplete="off"
              autocorrect="off"
              id="pc-factory--input_1"
              value={where.value}
              onChange={where.onChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="pc-factory--input_2">
            <div>체크인</div>
            <PcInput
              type="text"
              placeholder="날짜 추가"
              autoComplete="off"
              autocorrect="off"
              id="pc-factory--input_2"
              name="openCalendar"
              value={checkIn}
            />
          </label>
        </div>
        <div>
          <label htmlFor="pc-factory--input_3">
            <div>체크아웃</div>
            <PcInput
              type="text"
              placeholder="날짜 추가"
              autoComplete="off"
              autocorrect="off"
              id="pc-factory--input_3"
              name="openCalendar"
            />
          </label>
        </div>
        <div style={{ display: 'flex' }}>
          <label htmlFor="pc-factory--input_4" style={{ flex: 1 }}>
            <div>인원</div>
            <PcInput
              type="text"
              placeholder="게스트 추가"
              autoComplete="off"
              autocorrect="off"
              id="pc-factory--input_4"
              size={8}
              value={guest.value}
            />
          </label>
          <button type="submit">
            <RiZoomInLine
              style={{
                fontSize: 43,
                background: '#FF385C',
                borderRadius: '50%',
                padding: 12,
                color: 'white',
                cursor: 'pointer',
              }}
            ></RiZoomInLine>
          </button>
        </div>
      </form>
      {visibleCalendar && (
        <CalendarContainer id="react-calendar-container">
          <Calendar showDoubleView={true}></Calendar>
        </CalendarContainer>
      )}
    </PcFactoryContainer>
  );
}
