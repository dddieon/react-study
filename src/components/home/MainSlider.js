import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  padding: 24px;
  scroll-padding: 0px 24px;
  display: flex;
  justify-content: center;
  width: 950px;
  word-break: keep-all;
  @media (min-width: 950px) {
    width: 100%;
  }
  a {
    display: block;
    width: 272px;
    @media (min-width: 950px) {
      width: 30%;
    }
    margin: 8px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    img {
      display: block;
      width: 100%;
    }
    .images__main--desc {
      padding: 12px 16px 16px;
      div {
        font-size: 18px;
        font-weight: 600;
      }
      p {
        font-size: 14px;
      }
    }
  }
`;
function MainSlider() {
  return (
    <div style={{ width: '100%', overflow: 'auto' }}>
      <MainContainer className="images__main">
        <Link to="/detail">
          <img
            alt="메인 이미지 슬라이더 이미지"
            src={
              'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
            }
          />
          <div className="images__main--desc">
            <div>독특한 공간</div>
            <p>단순한 숙소 이상의 특별함이 담긴 공간</p>
          </div>
        </Link>
        <Link to="/detail">
          <img
            alt="메인 이미지 슬라이더 이미지"
            src={
              'https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720'
            }
          />
          <div className="images__main--desc">
            <div>온라인 체험</div>
            <p>모두가 함께 즐기는 세계 각지의 독특한 체험</p>
          </div>
        </Link>
        <Link to="/detail">
          <img
            alt="메인 이미지 슬라이더 이미지"
            src={
              'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
            }
          />
          <div className="images__main--desc">
            <div>집 전체</div>
            <p>
              일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을
              보내세요.
            </p>
          </div>
        </Link>
      </MainContainer>
    </div>
  );
}

export default MainSlider;
