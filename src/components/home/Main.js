import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiZoomInLine } from 'react-icons/ri';
import mobileBackgroundImage from '../../assets/image/background-mobile.png';
import backgroundImage from '../../assets/image/background.jpg';
import MainSlider from '../../containers/MainSlider';
// 반응형을 위한 media모듈
import media from '../../util/media';

// boarding 관련 컴포넌트
const Board = styled.div`
  position: relative;
  padding-top: 133%;
  @media (min-width: 744px) {
    padding-top: 100%;
  }
  @media (min-width: 950px) {
    padding-top: max(550px, min(85vh, 56.25%));
  }
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
  @media (min-width: 744px) {
    background-image: url(${backgroundImage});
  }
`;
const BoardContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  @media (min-width: 744px) {
    padding-top: 48px;
    padding-left: 48px;
    padding-right: 48px;
  }
  @media (min-width: 1128px) {
    padding-left: 80px;
    padding-right: 80px;
  }
  header {
    color: white;
    text-align: center;
    @media (min-width: 744px) {
      width: 300px;
      padding-top: 186px;
      text-align: left;
    }
    @media (min-width: 950px) {
      padding-top: 102px;
    }
    h1 {
      font-size: 26px;
      margin-bottom: 8px;
      line-height: 32px;
      @media (min-width: 744px) {
        font-size: 32px;
      }
    }
    p {
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 16px;
      line-height: 18px;
      @media (min-width: 744px) {
        font-size: 14px;
      }
    }
  }
`;
// Form 관련 컴포넌트
const MobileLabel = styled.label`
  display: flex;
  width: 100%;
`;
const MobileInput = styled.input`
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

const MobileFactory = styled.div`
  padding-bottom: 16px;
  form {
    width: 100%;
    padding: 10px;
    background: #fefefe;
    border-radius: 24px;
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
          <MobileFactory className="mobile-factory">
            <form action="/s/all">
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
                />
              </MobileLabel>
            </form>
          </MobileFactory>
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
      <MainSlider />
      <div className="image-slider--sub">
        <div>
          <h2>온라인 체험</h2>
          <p>
            세계 각지의 사람들을 만나 새로운 경험을 해보세요. 개성 있는 호스트가
            진행하는 실시간 영상 세션을 통해 이제 집에서도 안전하게 체험을
            즐기실 수 있습니다.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
