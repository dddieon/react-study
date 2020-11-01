import React from 'react';
import styled from 'styled-components';
import { RiZoomInLine } from 'react-icons/ri';

export const PcFactoryContainer = styled.div`
  display: none;
  padding-bottom: 16px;
  form {
    width: 100%;
    padding: 10px;
    background: #fefefe;
    border-radius: 24px;
  }
`;

export const PcInput = styled.input`
  flex: 1;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  background: none;
  border: 0px;
  color: #222222;
  margin: 0px;
  padding: 0px;
  width: 100%;
  text-overflow: ellipsis;
  cursor: text;
`;

export const PcLabel = styled.label`
  display: flex;
  width: 100%;
`;

export default function PcFactory() {
  return (
    <PcFactoryContainer className="pc-factory">
      <form action="/s/all">
        <PcLabel htmlFor="pc-factory--input">
          <button type="submit">
            <RiZoomInLine
              style={{ display: 'block', fontSize: 20, margin: '0 12px' }}
            />
          </button>
          <PcInput
            type="text"
            placeholder="어디로 여행 가세요?"
            autoComplete="off"
            autocorrect="off"
            id="Pc-factory--input"
          />
        </PcLabel>
      </form>
    </PcFactoryContainer>
  );
}
