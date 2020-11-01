import React from 'react';
import styled from 'styled-components';
import SliderBox from './SliderBox';

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
`;
function MainSlider() {
  return (
    <div style={{ width: '100%', overflow: 'auto' }}>
      <MainContainer className="images__main">
        <SliderBox
          src={'./detail'}
          image={
            'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720'
          }
          className={'images__main--desc'}
          title={'독특한 공간'}
          desc={'단순한 숙소 이상의 특별함이 담긴 공간'}
        />
        <SliderBox
          src={'./detail'}
          image={
            'https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720'
          }
          className={'images__main--desc'}
          title={'온라인 체험'}
          desc={'모두가 함께 즐기는 세계 각지의 독특한 체험'}
        />
        <SliderBox
          src={'./detail'}
          image={
            'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720'
          }
          className={'images__main--desc'}
          title={'집 전체'}
          desc={
            '일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을보내세요.'
          }
        />
      </MainContainer>
    </div>
  );
}

export default MainSlider;
