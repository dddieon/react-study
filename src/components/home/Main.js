import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { RiZoomInLine } from 'react-icons/ri';
import '../../assets/image/background.jpg';

// boarding 관련
const Board = styled.div`
  position: relative;
  padding-top: 133%;
  @media screen and (min-width: 744px) {
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
  background: #222;
  z-index: -100;
`;
const BoardContent = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  header {
    color: white;
    text-align: center;
    @media screen and (min-width: 744px) {
      padding-top: 186px;
    }
    h1 {
      font-size: 26px;
      margin-bottom: 8px;
    }
    p {
      font-size: 12px;
      margin-bottom: 16px;
    }
  }
`;
// factory 관련
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
  padding: 24px;
  form {
    width: 100%;
    padding: 10px;
    background: #fefefe;
    border-radius: 24px;
  }
`;

// button

const RoundedButton = styled(Link)`
  font-size: 14px;
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
            <form action="/detail">
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
      <div className="image-slider--main" style={{ scrollPadding: '0px 24px' }}>
        <div>
          <div>독특한 공간</div>
          <p>단순한 숙소 이상의 특별함이 담긴 공간</p>
        </div>
        <div>
          <div>온라인 체험</div>
          <p>모두가 함께 즐기는 세계 각지의 독특한 체험</p>
        </div>
        <div>
          <div>집 전체</div>
          <p>
            일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을 보내세요.
          </p>
        </div>
      </div>
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