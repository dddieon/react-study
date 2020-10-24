import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AsideTag = styled.aside`
  font-weight: bold;
  padding: 16px 24px;
  text-decoration: underline;
  font-size: 14px;
  text-align: center;
`;
const Aside = () => {
  return (
    <AsideTag>
      <Link>
        에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.
      </Link>
    </AsideTag>
  );
};

export default Aside;
