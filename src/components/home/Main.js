// dependency
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// components
import mobileBackgroundImage from '../../assets/image/background-mobile.png';
import backgroundImage from '../../assets/image/background.jpg';
import MainSlider from '../../containers/MainSlider';
import SubSlider from '../../containers/SubSlider';
import PcFactory from '../../containers/factory/PcFactory';
import MobileFactory from '../../containers/factory/MobileFactory';

// modules
import { media } from '../../util/media';

// board 컴포넌트
const Board = styled.div`
  position: relative;
  padding-top: 133%;
  ${media.tablet`padding-top: 100%;`}
  ${media.pc`padding-top:max(550px, min(85vh, 56.25%));`}
`;
const BoardBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  vertical-align: bottom;
  min-height: 1px;
  background-image: url(${mobileBackgroundImage});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -100;
  ${media.tablet`background-image: url(${backgroundImage});`}
`;
const BoardContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  ${media.tablet` padding-top: 48px; padding-left: 48px; padding-right: 48px; .mobile-factory{display:none;} .pc-factory{display:block}`}
  ${media.pc` padding-top:146px; padding-left: 80px; padding-right: 80px;`}
  header {
    color: white;
    text-align: center;
    ${media.tablet`width: 300px; padding-top: 186px; text-align: left;`}
    ${media.pcSub` padding-top: 102px;`}

    h1 {
      font-size: 26px;
      margin-bottom: 8px;
      line-height: 32px;
      ${media.tablet` font-size: 32px;`}
    }
    p {
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 16px;
      line-height: 18px;
      ${media.tablet` font-size: 14px;`}
    }
  }
`;

// 버튼 컴포넌트
const RoundedButton = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  color: #222;
  background: #eee;
  padding: 8px 16px;
  border-radius: 8px;
`;

const Main = () => {
  return (
    <main>
      <Board className="board">
        <BoardBackground className="board__background"></BoardBackground>
        <BoardContent className="board__content">
          {/* Factory */}
          <MobileFactory className="mobile-factory" />
          <PcFactory className="pc-factory" />
          <header>
            <h1>이제, 여행은 가까운 곳에서.</h1>
            <p>
              새로운 곳에서 머물러보세요. 직접 살아보거나, 업무를 보거나, 휴식할
              수 있는 가까운 숙소를 찾아보세요.
            </p>
            <RoundedButton to="/detail">가까운 여행지 둘러보기</RoundedButton>
          </header>
        </BoardContent>
      </Board>
      {/* 슬라이더 1 */}
      <MainSlider />
      {/* 슬라이더 2 */}
      <SubSlider />
    </main>
  );
};

export default Main;
