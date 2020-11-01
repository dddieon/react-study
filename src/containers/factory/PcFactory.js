import React from 'react';
import styled from 'styled-components';
import { RiZoomInLine } from 'react-icons/ri';

export const PcFactoryContainer = styled.div`
  display: none;
  background: #fefefe;
  border-radius: 34px;
  max-width: 850px;
  margin: 0 auto;
  padding: 10px;
  font-size: 14px;
  form {
    display: flex;
    div {
      flex: 1;
    }
  }
`;

export const PcInput = styled.input``;

export const PcLabel = styled.label``;

export default function PcFactory() {
  return (
    <PcFactoryContainer className="pc-factory">
      <form action="/s/all">
        <div style={{ paddingLeft: 16 }}>
          <PcLabel htmlFor="pc-factory--input_1">
            <div>위치</div>
            <PcInput
              type="text"
              placeholder="어디로 여행 가세요?"
              autoComplete="off"
              autocorrect="off"
              id="pc-factory--input_1"
            />
          </PcLabel>
        </div>
        <div>
          <PcLabel htmlFor="pc-factory--input_2">
            <div>체크인</div>
            <PcInput
              type="text"
              placeholder="날짜 추가"
              autoComplete="off"
              autocorrect="off"
              id="pc-factory--input_2"
            />
          </PcLabel>
        </div>
        <div>
          <PcLabel htmlFor="pc-factory--input_3">
            <div>체크아웃</div>
            <PcInput
              type="text"
              placeholder="날짜 추가"
              autoComplete="off"
              autocorrect="off"
              id="pc-factory--input_3"
            />
          </PcLabel>
        </div>
        <div style={{ display: 'flex' }}>
          <PcLabel htmlFor="pc-factory--input_4">
            <div>인원</div>
            <PcInput
              type="text"
              placeholder="게스트 추가"
              autoComplete="off"
              autocorrect="off"
              id="pc-factory--input_4"
            />
          </PcLabel>
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
    </PcFactoryContainer>
  );
}
