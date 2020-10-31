import React from 'react';
import styled from 'styled-components';
import SliderBox from './SliderBox';
// modules
import { media } from '../util/media';

const ContainerWrapper = styled.div`
  width: 100%;
  overflow: auto;
  background: #000;
  color: #fefefe;
  padding: 32px 24px 40px;
  .texts__sub {
    padding: 24px 8px;
    ${media.tablet`padding:48px 8px 64px;`}
    ${media.pc`padding:64px 8px 80px;`}
  }
`;
const MainContainer = styled.div`
  scroll-padding: 0px 24px;
  display: flex;
  justify-content: center;
  width: 950px;
  word-break: keep-all;
  overflow: hidden;
  ${media.pcSub`width:100%;`}
  a {
    display: block;
    position: relative;
    .images__sub--desc {
      position: absolute;
      background: rgb(34, 34, 34);
      z-index: 11;
      bottom: 0;
      left: 0;
      right: 0;
      border-radius: 0 0 16px 16px;
    }
  }
`;
function SubSlider() {
  return (
    <ContainerWrapper>
      <div className="texts__sub">
        <h2>온라인 체험</h2>
        <p>전문가가 진행하고 모두 함께 즐기는 참여형 액티비티</p>
      </div>
      <MainContainer className="images__sub">
        <SliderBox
          src={'./detail'}
          image={
            'https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg?im_w=720'
          }
          className={'images__sub--desc'}
          desc={'샹하이 샤오롱바오 만드는 법 배우기'}
        />

        <SliderBox
          src={'./detail'}
          image={
            'https://a0.muscache.com/im/pictures/6e0c69d9-e785-4b00-9633-aebad092e404.jpg?im_w=720'
          }
          className={'images__sub--desc'}
          desc={'모두가 함께 즐기는 세계 각지의 독특한 체험'}
        />

        <SliderBox
          src={'./detail'}
          image={
            'https://a0.muscache.com/im/pictures/928c6296-3b28-491a-a579-e696b8928870.jpg?im_w=720'
          }
          className={'images__sub--desc'}
          desc={
            '일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을보내세요.'
          }
        />

        <SliderBox
          src={'./detail'}
          image={
            'https://a0.muscache.com/im/pictures/50109909-bdb5-47d4-8883-e0e6fd00c18c.jpg?im_w=720'
          }
          className={'images__sub--desc'}
          desc={
            '일행만을 위한 편안한 공간에서 친구 및 가족과 오붓한 시간을보내세요.'
          }
        />
      </MainContainer>
    </ContainerWrapper>
  );
}

export default SubSlider;
