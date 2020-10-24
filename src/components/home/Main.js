import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <main>
      <header className="header__mobile">
        <label for="header__mobile-serchbar">
          <i>아이콘</i>
          <input
            type="text"
            placeholder="어디로 여행 가세요?"
            autocorrect="off"
            id="header__mobile-serchbar"
          />
        </label>
      </header>
      <div style={{ position: 'relative' }}>
        <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
          background용
        </div>
        <div>
          <h1>이제, 여행은 가까운 곳에서.</h1>
          <span>
            새로운 곳에서 머물러보세요. 직접 살아보거나, 업무를 보거나, 휴식할
            수 있는 가까운 숙소를 찾아보세요.
          </span>
          <Link to="/detail">가까운 여행지 둘러보기</Link>
        </div>
      </div>
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
