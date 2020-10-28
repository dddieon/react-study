import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div>
        <section>
          <h4>소개</h4>
          <ul>
            <li>
              <Link to="/detail" className="_o06542u">
                에어비앤비 이용 방법
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                뉴스룸
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                에어비앤비 플러스
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                에어비앤비 Luxe
              </Link>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="/detail"
                className="_o06542u"
              >
                호텔투나잇
              </a>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                에어비앤비 비즈니스 프로그램
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                올림픽
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                채용정보
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h4>커뮤니티</h4>
          <ul>
            <li>
              <Link to="/detail" className="_o06542u">
                다양성 및 소속감
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                접근성
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                에어비앤비 어소시에이트
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                구호 인력을 위한 숙소
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                친구 초대하기
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h4>호스팅하기</h4>
          <ul>
            <li>
              <Link to="/detail" className="_o06542u">
                숙소 호스팅
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                온라인 체험 호스팅하기
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                체험 호스팅하기
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                책임감 있는 호스팅
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                Open Homes
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                자료 센터
              </Link>
            </li>
            <li>
              <Link to="/detail" className="_o06542u">
                커뮤니티 센터
              </Link>
            </li>
          </ul>
        </section>
        <section>
          <h4>에어비앤비 지원</h4>
          <ul>
            <Link to="/detail" className="_o06542u">
              에어비앤비의 코로나19 대응 방안
            </Link>
            <Link to="/detail" className="_o06542u">
              도움말 센터
            </Link>
            <Link to="/detail" className="_o06542u">
              예약 취소 옵션
            </Link>
            <Link to="/detail" className="_o06542u">
              에어비앤비 이웃 민원 지원
            </Link>
            <Link to="/detail" className="_o06542u">
              신뢰와 안전
            </Link>
          </ul>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
